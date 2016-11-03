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
    gulp.src('./src/assets/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: './src/assets/css',
            sass: './src/assets/sass',
            sourcemap: true,
            debug: true,
            task: 'watch'
        }))
});

gulp.task('compile', function() {
    gulp.src('./src/assets/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: './src/assets/css',
            sass: './src/assets/sass',
            sourcemap: true,
            debug: false,
            task: 'compile'
        }))
});

gulp.task('css', function() {
    return gulp.src(['./src/assets/css/style.css', './src/assets/css/responsivo.css'])
        .pipe(concatCss("style.min.css"))
        .pipe(importCss())
        .pipe(cleanCSS())
        .pipe(gulp.dest("./www/"));
});

gulp.task('cssLibs', function() {
    return gulp.src(['./src/assets/css/bibliotecas.css'])
        .pipe(importCss())
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest("./www/"));
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
        assetsJS['assets'][i] = path.join('./src/assets/', assetsJS['assets'][i]);
    }
});

gulp.task('jsLibs', function() {
    return gulp.src(libsJS['libs'])
        .pipe(concat('bibliotecas.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./www/'));
});

gulp.task('jsAssets', function() {
    return gulp.src(assetsJS['assets'])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./www/'));
});

gulp.task('js', ['joinPathsLibsJS', 'joinPathsAssetsJS', 'jsLibs', 'jsAssets'], function() {});
gulp.task('jsLibrarys', ['joinPathsLibsJS', 'jsLibs'], function() {});

gulp.task('reloadCSS', function() {
    return gulp.src("./src/assets/css/*.css")
        //.pipe(browserSync.stream());
});

gulp.task('tinypng', function() {
    gulp.src('./src/assets/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng('GCwUrXYBQFdxfi9WkS85I1A19z57Sgmz'))
        .pipe(gulp.dest('./www/build/img'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        open: 'external', // false,
        host: '',
        proxy: '',
        port: 80,
        /*
        server: {
            baseDir: "./"
        }
        */
    });
});

gulp.task('default', ['compass', 'css', 'js'], function() {// 'browser-sync',
    gulp.watch(["./src/assets/css/*.css", "!./src/assets/css/bibliotecas.css"], ['css', 'reloadCSS']);
    gulp.watch(["./src/assets/css/bibliotecas.css"], ['cssLibs', 'reloadCSS']);
    gulp.watch("./scripts.json", ['js']);
    gulp.watch("./src/assets/js/*.js", ['jsAssets']);
    //gulp.watch("./src/assets/js/*.js").on('change', browserSync.reload);
});

gulp.task('build', ['compile'], function(callback) {
    setTimeout(function() {
        runSequence(['cssLibs', 'jsLibrarys'], callback);
    }, 10000);
});
