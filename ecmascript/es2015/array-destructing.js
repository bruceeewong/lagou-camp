// 数组的解构

const arr = [100, 200, 300];

// const [foo, bar, baz] = arr;
// console.log(foo, bar, baz);

// const [, , baz] = arr;
// console.log(baz);

// 剩余操作符，仅在最后使用
// const [foo, ...rest] = arr;
// console.log(rest);

// const [foo, bar, baz, more] = arr;
// console.log(more); // 访问不存在的下标, undefined

// 默认值
// const [foo, bar, baz, more = "default"] = arr;
// console.log(more);

// 解构能方便字符串分割取值
const path = "/foo/bar/baz";
// 以前需要临时变量
// const tmp = path.split("/");
// const rootdir = tmp[1];

const [, rootdir] = path.split("/");
console.log(rootdir);
