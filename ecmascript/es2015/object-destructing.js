// 对象解构

const obj = { name: "Jack", age: 18 };

// const { name } = obj;
// console.log(name);

// 命名冲突
// const name = "Amy";
// const { name: objName } = obj;
// console.log(name);

// 命名冲突 - 默认值
// const name = "Amy";
// const { name: objName = "mike" } = obj;
// console.log(name);
// console.log(objName);

// 应用
const { log } = console;
log(1);
log(2);
