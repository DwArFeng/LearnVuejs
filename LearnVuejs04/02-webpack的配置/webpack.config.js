const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    //动态的获取路径，使用node的语法可以实现。
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development'
};