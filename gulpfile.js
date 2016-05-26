// Include gulp and our plugins
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify');

gulp.task('styles', function () {
    gulp.src('css/sav-select.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('dist/sav-select.js')
        .pipe(concat('sav-select.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Default Task
gulp.task('default', ['scripts', 'styles']);