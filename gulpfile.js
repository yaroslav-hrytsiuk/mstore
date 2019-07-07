"use strict";

var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var gulpImports = require('gulp-imports');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var minifyJS = require('gulp-uglify');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('styles', function () {
    return gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('out/styles'))
        .pipe(reload({stream:true}));
});


gulp.task('scripts', function() {
    return gulp.src('src/js/index.js')
        .pipe(gulpImports())
        .pipe(minifyJS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('out/scripts'))
        .pipe(reload({stream:true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('html', function(){
    gulp.src('index.html')
        .pipe(reload({stream:true}));
});

gulp.task('watch', function () {
    gulp.watch('src/less/*.less', ['styles']);
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('index.html', ['html']);
});


gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'watch', 'browser-sync');
});