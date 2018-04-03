var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var sourcemaps = require('gulp-sourcemaps');
var reload = browserSync.reload;
var sassdoc = require('sassdoc');

gulp.task('sassdoc', function () {
  return gulp.src(__dirname + '/sass/**/*.scss')
    .pipe(sassdoc({
      dest: __dirname + '/demo/docs'
    }));
});

gulp.task('build', function () {
  var processors = [
      autoprefixer({browsers: ['last 1 version']}),
      cssnano(),
  ];

  return gulp.src('./sass/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('sass-demo', function () {
  return gulp.src(['./sass/**/*.scss', './demo/sass/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./demo/css'))
    .pipe(reload({ stream:true }));
});

//Watch task
gulp.task('default', function() {
  browserSync({
    server: {
      baseDir: 'demo'
    }
  });
  gulp.watch(['./demo/**/*.scss'], ['sass-demo']);
  gulp.watch(['./sass/**/*.scss'], ['sass-demo']);
  gulp.watch(['*.html', '*.css', '*.js'], {cwd: 'demo'}, reload);
});
