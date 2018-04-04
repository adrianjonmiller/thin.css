import child from 'child_process';

// Custom
import files from './files';
import paths from './paths';

export default class Jekyll {
  constructor () {
  }

  dev () {
    var jekyll = child.spawn('bundle',
      [ 'exec',
        'jekyll',
        'build',
        '--config',
        files.config,
        '--destination',
        paths.site,
        '--watch'
      ],
      {
        cwd: paths.docs,
        stdio: 'inherit',
      }
    );

    if (typeof cb === 'function') {
      jekyll.on('exit', function(code) {
        cb(() => { code === 0 ? null : 'ERROR: Jekyll process exited with code: '+ code });
      });
    }

    return jekyll
  }

  prod (dest) {
    var dest = dest || paths.site;

    var jekyll = child.spawn('bundle',
      [
        'exec',
        'jekyll',
        'build',
        '--config',
        files.config,
        '--destination',
        dest
      ],
      {
        cwd: paths.docs,
        stdio: 'inherit'
      }
    )

    if (typeof cb === 'function') {
      jekyll.on('exit', function(code) {
        cb(() => { code === 0 ? null : 'ERROR: Jekyll process exited with code: '+ code });
      });
    }

    return jekyll
  }
}
