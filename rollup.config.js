import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/main.js',
  plugins: [ babel() ],
  moduleName: 'main',
  format: 'iife'
}
