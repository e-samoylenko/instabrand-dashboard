var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('connect', function() {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('css', function () {
    gulp.src('./app/css/*.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(connect.reload());
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

gulp.task('img', function () {
  gulp.src('./app/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.scss'], ['css']);
});
 
gulp.task('default', ['connect', 'html', 'css', 'img', 'watch']);