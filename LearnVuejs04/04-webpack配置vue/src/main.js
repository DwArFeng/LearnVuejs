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
//使用vue进行开发。
import Vue from 'vue';

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

const app = new Vue(
  {
    el: '#app',
    template: `
      <div>
        <h2>{{message}}</h2>
        <button v-on:click="btnClick">按钮</button>
        <h2>{{name}}</h2>
      </div>
    `,
    data: {
      message: 'Hello Webpack',
      name: 'DwArFeng'
    },
    methods: {
      btnClick: function () {

      }
    }
  }
);