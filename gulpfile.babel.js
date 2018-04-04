import gulp from 'gulp';
import browserSync from 'browser-sync';

// Custom
import paths from './gulp/paths';
import files from './gulp/files';

// Classes
import Jekyll from './gulp/jekyll'
import Sass from './gulp/sass';

var jekyll = new Jekyll();
var sass = new Sass();

gulp.task('thin:dev', () => {
  return sass.thin()
})

gulp.task('jekyll:dev', () => {
  return jekyll.dev()
})

gulp.task('default', ['thin:dev', 'jekyll:dev'], () => {
  browserSync.init({
    files: paths.site + '**/*',
    port: 4000,
    server: {
      baseDir: paths.site
    }
  });
})
