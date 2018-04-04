import path from 'path';

import paths from './paths';

export default {
  config: path.join(paths.docs, '_config.yml'),
  sass: path.join(paths.src, '**/*.scss')
}
