const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
//найти scss сделать конвертацию и сконвертированный файл положить в директорию
function style(){
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}
// gulp-uglify-es
function build() {
    gulp.src('js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
    gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'));
    gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
    gulp.src('./error.html')
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

// gulp.task('default', function () {
//     return gulp.src('src/app.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist'));
// });

exports.style = style;
exports.watch = watch;
exports.build = build;
