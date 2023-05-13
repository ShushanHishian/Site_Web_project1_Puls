const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
gulp.task('clean', function() { return del.sync('dist'); });

 gulp.task('build', gulp.series('clean', 'imagemin', 'sass', 'js', function(done) {

var buildMain = gulp.src([
    'app/*.html',
    'app/.htaccess'
]).pipe(gulp.dest('dist'));

var buildCss = gulp.src([
    'app/css/main.min.css'
    ])
.pipe(gulp.dest('dist/css'));

var buildJs =  gulp.src([
    'app/js/scripts.min.js'
    ])
.pipe(gulp.dest('dist/js'));

var buildFonts = gulp.src([
    'app/fonts/**/*'
    ])
.pipe(gulp.dest('dist/fonts'));
done(); }));
gulp.task('compile_sass', ['compile_bower_sass'], function () {
    return gulp.src(paths.scss_files, {base:'src'})
      .pipe(gulp.dest(paths.dist))
      .on('error', gutil.log)
      .pipe(sass().on('error', sass.logError))
      .pipe(minifycss({
        keepSpecialComments: false,
        removeEmpty: true
      }))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(paths.dist))
  });