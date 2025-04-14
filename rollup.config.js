import babel from  '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const production = process.env.NODE_ENV == 'production';

export default {
  external: ['s72', 's72.ui', 's72.transactional'],
  input: 'site/static/js/main.js',
  output: {
    name: 'template',
    file: 'site/static/scripts/main.js',
    format: 'iife',
    globals: {
      s72: 's72',
      's72.ui': 's72.ui',
      's72.transactional': 's72.transactional'
    },
    compact: production,
    sourcemap: !production
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-env'],
        ['@babel/preset-react', { pragma: 's72.ui.h' }]
      ],
    }),
    (production && terser())
  ],
  watch: {
    clearScreen: false
  }
};
