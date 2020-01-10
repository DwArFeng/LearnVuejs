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