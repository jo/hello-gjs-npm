import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/main.js',
  plugins: [
    babel({
      presets: [
        'es2015-rollup'
      ]
    })
  ],
  moduleName: 'main',
  format: 'iife'
}
