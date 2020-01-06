//小明开发的脚本。
var name = '小明';
var age = 18;
var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(20, 30)
}

//
//使用固定的语法导出模块化的脚本变量。
//

//1. 导出方式1:
export {
  flag, sum
}
//2. 导出方式2:
export var num1 = 1000;
export var height = 1.88;

//3. 导出函数/类:
export function mul(num1, num2) {
  return num1 * num2;
}

export class Person {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log('在奔跑');
  }
}

//4. export default:
//某些情况下，一个模块中包含某个功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名。
//在同一个模块中，export default 只能有一个。
const address = '北京市';
export default address;