module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/public/build',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  watch: true
}
