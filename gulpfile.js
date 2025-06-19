const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const through2 = require('through2');
const replace = require('gulp-replace');

const path = {
  src: '.',
  dist: 'dist',
  js: 'common/js',
  css: 'common/css',
  scss: 'common/scss',
  img: 'imageFile'
};

// GitHub Pages用のベースパス - 本番環境では./で統一
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// SCSSをCSSに変換・圧縮
function styles() {
  return src(`${path.scss}/**/*.scss`)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(through2.obj(function(file, enc, cb) {
      if (file.isBuffer()) {
        let content = file.contents.toString();
        // CSSファイル内のパス修正
        if (isGitHubPages) {
          // GitHub Pages用: 絶対パスを相対パスに変換
          content = content.replace(/url\(\"?\/imageFile\//g, 'url("../../imageFile/');
          content = content.replace(/url\(\/?imageFile\//g, 'url(../../imageFile/');
        }
        file.contents = Buffer.from(content);
      }
      cb(null, file);
    }))
    .pipe(dest(`${path.dist}/${path.css}`));
}

// JavaScript圧縮
function scripts() {
  return src([
    `${path.js}/**/*.js`,
    `!${path.js}/**/*.min.js`
  ])
    .pipe(uglify())
    .pipe(dest(`${path.dist}/${path.js}`));
}

// 既に圧縮されているJSファイルをコピー
function copyMinScripts() {
  return src(`${path.js}/**/*.min.js`)
    .pipe(dest(`${path.dist}/${path.js}`));
}

// 画像圧縮
function images() {
  return src(`${path.img}/**/*`)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [{removeViewBox: true}, {cleanupIDs: false}]
      })
    ]))
    .pipe(dest(`${path.dist}/${path.img}`));
}

// HTMLファイルコピー（ベースパス修正付き）

function copyHtml() {
  return src([
    '**/*.html',
    '!node_modules/**',
    '!dist/**',
    '!bin/**',
    '!docs/**'
  ])
    .pipe(through2.obj(function(file, enc, cb) {
      if (file.isBuffer()) {
        let content = file.contents.toString();
        
        // ファイルの深さに応じた相対パスプレフィックスを計算
        const depth = file.relative.split('/').length - 1;
        const prefix = depth > 0 ? '../'.repeat(depth) : './';
        
        // 絶対パスを相対パスに変換
        // href="/..." または src="/..." のパターンを変換
        content = content.replace(/(href|src)="\/([^"]+)"/g, function(match, attr, pathValue) {
          // http:// や https:// で始まる場合はそのまま
          if (pathValue.startsWith('http://') || pathValue.startsWith('https://') || pathValue.startsWith('//')) {
            return match;
          }
          return `${attr}="${prefix}${pathValue}"`;
        });
        
        // href=/ または src=/ のパターン（クォートなし）も変換
        content = content.replace(/(href|src)=\/([^\s>]+)/g, function(match, attr, pathValue) {
          return `${attr}="${prefix}${pathValue}"`;
        });
        
        file.contents = Buffer.from(content);
      }
      cb(null, file);
    }))
    .pipe(dest(path.dist));
}

// その他のファイルコピー
function copyOthers() {
  return src([
    'favicon.png',
    'common/font/**',
    'rookie_diary/**/*',
    'projects/**/*',
    '!**/*.scss',
    '!**/*.html'  // HTMLファイルは copyHtml で処理するので除外
  ], { base: '.' })
    .pipe(dest(path.dist));
}

// 開発用ウォッチャー
function watcher() {
  watch(`${path.scss}/**/*.scss`, styles);
  watch(`${path.js}/**/*.js`, parallel(scripts, copyMinScripts));
  watch('**/*.html', copyHtml);
}

// クリーンビルド
const build = series(
  styles,
  parallel(
    scripts,
    copyMinScripts,
    images,
    copyHtml,
    copyOthers
  )
);

exports.styles = styles;
exports.build = build;
exports.watch = series(styles, watcher);
exports.default = build;