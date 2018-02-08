// 模块 导入
// 第三方(npm install > node_modules)  不用./
// 自定义的 ./
//使用解构赋值 获取导出的内容
//let {num,str}={num:1,str:"zf"}

//console.log(num);
//import 会变量提声(升),但是一般开发都写在 上面
import {num,str} from "./zf.js";
//一次性获取出来
import * as zf from "./zf.js";
import px from "./px.js";
//var str=1; 不可以重复声明
console.log(num);
console.log(px);