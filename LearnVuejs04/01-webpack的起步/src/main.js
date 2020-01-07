/*
 * 使用CommonJS规范引入打包的方法。
 */
const {add, mul} = require('./mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));

/*
 * 使用ES6规范引入打包的方法。
 */
import {age, height, name} from "./info";

console.log(name);
console.log(age);
console.log(height);