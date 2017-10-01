import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.js',
  plugins: [
    babel({
      presets: [
        'es2015-rollup'
      ]
    })
  ],
  name: 'main',
  output: {
    format: 'iife'
  }
}
