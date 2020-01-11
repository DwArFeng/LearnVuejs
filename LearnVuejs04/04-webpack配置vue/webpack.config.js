const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    //动态的获取路径，使用node的语法可以实现。
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        use: ['style-loader', 'css-loader']

      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //图片的大小小于limit的时候，会将图片转换为base64。
              //图片的大小大于limit的时候，会使用file-loader加载图片。
              limit: 100000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};