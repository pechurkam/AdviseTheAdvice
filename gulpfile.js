const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
//найти scss сделать конвертацию и сконвертированный файл положить в директорию
function style(){
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

function build() {
    gulp.src('js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
    gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
    gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
    gulp.src('./img/*')
        .pipe(gulp.dest('./dist/img'));
    return  gulp.src('./fonts/*')
        .pipe(gulp.dest('./dist/fonts'));
}

function watch(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;
exports.build = build;