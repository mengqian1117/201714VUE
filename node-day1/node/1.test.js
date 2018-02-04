//一个js文件就是一个模块,就相当于在外面包了一个(function(){})()
//在node环境中全局属性是global
//在一个js文件的内容是运行在一个模块中(相当于一个私有作用域) 在一个模块中把var的变量不会给全局对象global增加属性
var a=1;
b=1; //不带var就是给global增加属性
console.log(global.a);//undefined
console.log(global.b);//1

//一个模块中的this不是global而是当前模块
console.log(this);// {}

//global中有很多全局属性方法不用定义可以直接使用
console.log(global);

console.time("zf");
for(let i=0;i<1000000;i++){
    typeof i;
}
//console.timeEnd("px");
// 内容必须和time是一致的 如果不一致就会报错 Warning: No such label 'px' for console.timeEnd()
console.timeEnd("zf");  //单位是 ms

console.warn("警告");
console.error("错误");


// console
// process(进程)   process.env   process.nextLick(在当前进程中最后执行的)
// Buffer(缓冲区)
// clearImmediate
// setImmediate   立即执行下一个进程
// clearInterval
// clearTimeout
// setInterval
// setTimeout

