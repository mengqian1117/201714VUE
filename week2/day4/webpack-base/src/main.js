 import {str} from "./A.js";
 // import B from "./B.js";
 //commonjs规范
 let B=require("./B.js");
 console.log(str);
 console.log(B);

 let arr=[1,2,3];
 let arr1=[4,5,6];
 let ary=[...arr,...arr1];
 //es7 中提供了对象的扩展运算符
 let obj1={name:"QQ"};
 let obj2={age:"10"};
 let obj={...obj1,...obj2};

 //导入css
 //将css看成一个模块 但是 默认解析的时候看成js
 import "./style.css";
 import "./style1.less";

 //在js中如果需要引入图片需要import导入
 import src from "./1.jpg";
 let img=new Image();
 img.src=src;
 document.body.appendChild(img);