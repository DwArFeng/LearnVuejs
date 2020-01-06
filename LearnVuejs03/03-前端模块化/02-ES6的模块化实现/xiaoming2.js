//小明开发的第二个脚本。
//使用固定的语法导出模块化的脚本变量。
//使用固定的语法导出模块化的脚本变量。
//使用固定的语法导出模块化的脚本变量。
//使用固定的语法导出模块化的脚本变量。
//使用固定的语法导出模块化的脚本变量。
//使用固定的语法导出所有的模块化的脚本变量。
import addr, * as xiaoming from "./xiaoming.js";
import {flag, height, mul, num1, Person, sum} from "./xiaoming.js";

if (flag) {
  console.log('小明是天才');
  console.log(sum(40, 50));
}

console.log(num1);
console.log(height);

console.log(mul(100, 200));

let person = new Person('小明');
console.log(person.name);
person.run();

console.log(addr);

console.log(xiaoming.flag);
console.log(xiaoming.height);
