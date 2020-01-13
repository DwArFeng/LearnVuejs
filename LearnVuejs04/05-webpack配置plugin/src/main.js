/*
 * 使用CommonJS规范引入打包的方法。
 */
const {add, mul} = require('./js/mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));

/*
 * 使用ES6规范引入打包的方法。
 */
import {age, height, name} from "./js/info";
/*
 * 使用Vue进行开发。
 */
import Vue from 'vue';
import App from './vue/App.vue';

console.log(name);
console.log(age);
console.log(height);

/*
 * 使用CommonJS规范依赖CSS文件。
 */
require('./css/normal.css');

/*
 * 使用CommonJS规范依赖LESS文件。
 */
require('./css/special.less');

new Vue({
    el: '#app',
    template: `
      <App/>`,
    components: {
      App
    }
  }
);