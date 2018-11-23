const path = require('path')
const extractTextWebpackPlugin = require('extract-text-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = (env)=>{
  let plugins = [new extractTextWebpackPlugin('css/[name].[hash].css')]
  if(env.NODE_ENV === 'production')
  {
    plugins.push(new cleanWebpackPlugin(['dist'],{root:__dirname}))
  } 

  return {
    entry : {
      player : path.resolve(__dirname,'src/js/player.js')
    },
    output :{
      path : path.resolve('dist'),
      filename : 'js/[name].[hash].js',
      chunkFilename : 'js/[id].[chunkhash].js',
      publicPath : path.resolve(__dirname,'dist') + '/'
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
          use : extractTextWebpackPlugin.extract({
            use : [
              {
                loader : 'css-loader',
                options : {
                  minimize : true
                }
              }
            ]
          })
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
    },
    plugins
  }

}