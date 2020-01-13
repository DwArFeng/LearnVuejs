function add(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

/*
 * 使用CommonJS规范对方法进行打包。
 */
module.exports = {
  add,
  mul
};