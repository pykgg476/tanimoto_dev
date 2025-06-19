const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

const path = {
  src: '.',
  dist: 'dist',
  js: 'common/js',
  css: 'common/css',
  scss: 'common/scss',
  img: 'imageFile'
};

// SCSSをCSSに変換・圧縮
function styles() {
  return src(`${path.scss}/**/*.scss`)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(replace(/url\("\/imageFile\//g, 'url("../../imageFile/'))
    .pipe(replace(/url\(\/imageFile\//g, 'url(../../imageFile/'))
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
const replace = require('gulp-replace');

function copyHtml() {
  return src([
    '**/*.html',
    '!node_modules/**',
    '!dist/**',
    '!bin/**',
    '!docs/**'
  ])
    .pipe(replace(/href="\/favicon\.png"/g, 'href="./favicon.png"'))
    .pipe(replace(/src="\/imageFile\//g, 'src="./imageFile/'))
    .pipe(replace(/href="\/common\//g, 'href="./common/'))
    .pipe(replace(/src="\/common\//g, 'src="./common/'))
    .pipe(dest(path.dist));
}

// その他のファイルコピー
function copyOthers() {
  return src([
    'favicon.png',
    'common/font/**',
    'rookie_diary/**/*',
    'projects/**/*',
    '!**/*.scss'
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