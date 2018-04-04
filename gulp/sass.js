import files from './files';
import paths from './paths';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import gulp from 'gulp';
import path from 'path';
import browserSync from 'browser-sync';

export default class Sass {
  constructor () {

  }

  thin () {
    return gulp.src(files.sass)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(paths.docsCss))
      .pipe(browserSync.stream());
  }

  thinBuild () {
    return gulp.src(files.sass)
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(rename('thin.css'))
      .pipe(gulp.dest(paths.dist))
  }
}
