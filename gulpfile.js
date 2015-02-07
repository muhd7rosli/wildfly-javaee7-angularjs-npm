/**
 * @author Muhammad Rosli <muhd7rosli@live.com>
 */
var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject'),
    sourcemaps = require('gulp-sourcemaps'),
    xml2js = require('xml2js'),
    fs = require('fs');

var config = {
    paths : {
        html : {
            src : ['webcontent/src/*.html', 'webcontent/src/*/*.html'],
            dest : 'src/main/webapp'
        },
        javascript : {
            src : ['webcontent/src/app/js/*.js'],
            dest : 'src/main/webapp/library/app/js'
        },
        css : {
            src : ['webcontent/src/app/css/*.css'],
            dest : 'src/main/webapp/library/app/css'
        }
    },
    webDir : 'src/main/webapp',
    moduleName : 'wildfly-javaee7-angularjs' // make sure you rename this part according to your maven artifactid
};

var customInjectOptions = {
    transform: function (filepath){
        if(filepath.slice(-4) === ".css"){

            return '<link rel="stylesheet" href="/'
                + config.moduleName + '/' + filepath.slice(config.webDir.length + 2)  + '" />';
        }
        else if(filepath.slice(-3) === ".js"){
            return '<script type="application/javascript" src="/'
                + config.moduleName + '/' + filepath.slice(config.webDir.length + 2)  + '"></script>';
        }

        // Use the default transform as fallback:
        return inject.transform.apply(inject.transform, arguments);
    }
};

/**
 * Gulp Tasks
 */
gulp.task("html", function(){
    return gulp.src(config.paths.html.src)
        .pipe(minifyHTML())
        .pipe(gulp.dest(config.paths.html.dest));
});

gulp.task("app-js", function(){
    return gulp.src(config.paths.javascript.src)
        .pipe(sourcemaps.init())
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write("/", {sourceMappingURLPrefix: '/' + config.moduleName + '/library/app/js'}))
        .pipe(gulp.dest(config.paths.javascript.dest));
});

gulp.task("app-css", function(){
    return gulp.src(config.paths.css.src)
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.paths.css.dest));
});

gulp.task("build-app-script", ["app-js", "app-css"]);

gulp.task("build-dep", function(){
    return gulp.src([
        'bower_components/*/*.min.js',
        'bower_components/*/*.min.js.map',
        'bower_components/*/dist/*.min.js',
        'bower_components/*/dist/*.min.map',
        'bower_components/*/dist/js/*.min.js',
        'bower_components/*/*.min.css',
        'bower_components/*/dist/css/*.min.css'
    ])
        .pipe(gulp.dest('src/main/webapp/library'));
});

gulp.task("build-app", ["build-app-script", "build-dep"], function(){

    var htmlSources = ['webcontent/src/*.html', 'webcontent/src/*/*.html'];

    var scripts = gulp.src([

        config.webDir + '/library/**/*.min.css',
        config.webDir + '/library/**/angular.min.js',
        config.webDir + '/library/**/angular-r*/*.min.js',
        config.webDir + '/library/**/app.min.js',
        config.webDir + '/library/**/security.min.js',
        config.webDir + '/library/**/controller.min.js',
        config.webDir + '/library/**/service.min.js',
        config.webDir + '/library/**/jquery.min.js',
        config.webDir + '/library/**/bootstrap.min.js'

    ], {read:false}, {relative: false});

    // this is where we inject
    return gulp.src(htmlSources)
        .pipe(inject(scripts, customInjectOptions))
        .pipe(minifyHTML())
        .pipe(gulp.dest(config.webDir));
});

gulp.task("default", ["build-app"]);