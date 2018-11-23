const path = require('path')

module.exports = {
  entry : {
    player : path.resolve(__dirname,'src/js/player.js')
  },
  output :{
    path : path.resolve('dist'),
    filename : 'js/[name].js'
  },
  devServer : {
    port : 8000
  },
  module : {
    rules : [
      {
          test : /\.(js|jsx)$/,
          exclude : /node_modules/,
          use : {
            loader : 'babel-loader',
            options : {
              presets : ['env','react','stage-2']
            }
          }
      },
      {
        test : /\.css$/,
        use : ['style-loader','css-loader']
      },
      {
        test : /\.(svg|png|jpg)$/,
        use : {
          loader : 'url-loader',
          options : {
            fallback : 'file-loader',
            limit : 100000,
            name : 'images/[name].[hash].[ext]'
          }
        }
      },
      {
        test : /\.json$/,
        use : 'json-loader'
      }
    ]
  }
}