var gulp = require('gulp');
var gutil = require('gulp-util');
var clearRequire = require('clear-require');
var browserSync = require('browser-sync').create();

const path = require('path');

var rename = require("gulp-rename");
var runSequence = require('run-sequence');

// CSS
var compass = require('gulp-compass');
var concatCss = require('gulp-concat-css');
var importCss = require('gulp-import-css');
var cleanCSS = require('gulp-clean-css');

// JS
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var libsJS, assetsJS;

var tinypng = require('gulp-tinypng');

gulp.task('compass', function() {
    gulp.src('./assets/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: './assets/css',
            sass: './assets/sass',
            sourcemap: true,
            debug: true,
            task: 'watch'
        }))
});

gulp.task('compile', function() {
    gulp.src('./assets/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: './assets/css',
            sass: './assets/sass',
            sourcemap: true,
            debug: false,
            task: 'compile'
        }))
});

gulp.task('css', function() {
    return gulp.src(['./assets/css/style.css', './assets/css/responsivo.css'])
        .pipe(concatCss("style.min.css"))
        .pipe(importCss())
        .pipe(cleanCSS())
        .pipe(gulp.dest("./dist/css/"));
});

gulp.task('cssLibs', function() {
    return gulp.src(['./assets/css/bibliotecas.css'])
        .pipe(importCss())
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest("./dist/css/"));
});

gulp.task('joinPathsLibsJS', function() {

    clearRequire('./scripts.json');
    libsJS = require('./scripts.json');

    for (var i = 0; i < libsJS['libs'].length; i++) {
        libsJS['libs'][i] = path.join('./bower_components/', libsJS['libs'][i]);
    }
});

gulp.task('joinPathsAssetsJS', function() {

    clearRequire('./scripts.json');
    assetsJS = require('./scripts.json');

    for (var i = 0; i < assetsJS['assets'].length; i++) {
        assetsJS['assets'][i] = path.join('./assets/', assetsJS['assets'][i]);
    }
});

gulp.task('jsLibs', function() {
    return gulp.src(libsJS['libs'])
        .pipe(concat('bibliotecas.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('jsAssets', function() {
    return gulp.src(assetsJS['assets'])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('js', ['joinPathsLibsJS', 'joinPathsAssetsJS', 'jsLibs', 'jsAssets'], function() {});

gulp.task('reloadCSS', function() {
    return gulp.src("./assets/css/*.css")
        .pipe(browserSync.stream());
});

gulp.task('tinypng', function() {
    gulp.src('./assets/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng('GCwUrXYBQFdxfi9WkS85I1A19z57Sgmz'))
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        open: 'external', // false,
        host: 'apptse.localhost.com',
        proxy: 'apptse.localhost.com',
        port: 80,
        /*
        server: {
            baseDir: "./"
        }
        */
    });
});

gulp.task('default', ['browser-sync', 'compass', 'css', 'js'], function() {
    gulp.watch(["./assets/css/*.css", "!./assets/css/bibliotecas.css"], ['css', 'reloadCSS']);
    gulp.watch(["./assets/css/bibliotecas.css"], ['cssLibs', 'reloadCSS']);
    gulp.watch("./scripts.json", ['js']);
    gulp.watch("./assets/js/*.js", ['jsAssets']);
    gulp.watch("./assets/js/*.js").on('change', browserSync.reload);
});

gulp.task('build', ['compile'], function(callback) {
    setTimeout(function() {
        runSequence(['cssLibs', 'css', 'js'], callback);
    }, 10000);
});
