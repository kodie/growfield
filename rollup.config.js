import { babel } from '@rollup/plugin-babel'

const config = {
  input: 'src/growfield.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'growfield',
    sourcemap: true
  },
  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
}

export default config
