import {str1,str2} from "./A.js";
import B from "./B.js"

//将css看做一个模块导入进来 此时默认将css看成一个js模块,需要让他识别成css
import "../css/style2.css";
import "../css/style1.less";

import imgSrc1 from "../img/1.jpg";
import imgSrc2 from "../img/2.jpg";
//console.log(imgSrc1);//当前img的图片的绝对路径路径
let img1=new Image;
let img2=new Image;
img1.src=imgSrc1;
img2.src=imgSrc2;
document.body.appendChild(img1);
document.body.appendChild(img2);
console.log(str2);
B();