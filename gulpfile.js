const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const path = {
  bin: 'bin',
  release: 'docs',
  js: 'common/js',
  css: 'common/css',
  scss: 'common/scss',
  img: 'imageFile'
};

function styles() {
  return src(`${path.bin}/${path.scss}/**/*.scss`)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest(`${path.bin}/${path.css}`));
}

function scripts() {
  return src(`${path.bin}/${path.js}/**/*.js`)
    .pipe(uglify())
    .pipe(dest(`${path.release}/${path.js}`));
}

function images() {
  return src(`${path.bin}/${path.img}/**/*`)
    .pipe(imagemin())
    .pipe(dest(`${path.release}/${path.img}`));
}

function copyHtml() {
  return src([
    `${path.bin}/**/*.html`,
    `${path.bin}/${path.css}/**/*`,
    `${path.bin}/${path.js}/**/*`,
    `${path.bin}/common/font/**`,
    `${path.bin}/rookie_diary/**/*`,
    `${path.bin}/projects/**/*`
  ], { base: path.bin })
    .pipe(dest(path.release));
}

function watcher() {
  watch(`${path.bin}/**/*`, series(styles, parallel(copyHtml, scripts, images)));
}

const build = series(styles, parallel(copyHtml, scripts, images));

exports.build = build;
exports.default = series(build, watcher);

