//arguments 就是默认给当前模块(闭包)传的实参集合
//console.log(arguments);
//0:{}. exports 导出
//1:{}  require 引入
//2.Module{}   当前模块
//3: 'F:\webstorm\201714VUE\node-day1\node\4.模块.js', 文件绝对路径
//4: 'F:\webstorm\201714VUE\node-day1\node'  文件目录(文件夹)的绝对路径

//使用的时候不会使用arguments[索引]的方式
console.log(exports);//{}
require("fs");
console.log(require);
//如果引用的是第三方模块 不用写./ 直接写文件名字,也不用写后缀
//require("vue");//会按照paths的路径去按顺序一个一个的找
//按照extensions中的后缀按顺序匹配(.js  .json  .node)

//因为内置模块也不需要加./,所以顺序问题是:先看是不是内置模块,不是内置模块再看是不是第三方模块

//自定义模块加上./  后缀也可以不写,也是按照顺序匹配的(.js  .json  .node)

/*
paths: 去找require引入文件路径的顺序
      [ 'F:\\webstorm\\201714VUE\\node-day1\\node\\node_modules',
        'F:\\webstorm\\201714VUE\\node-day1\\node_modules',
        'F:\\webstorm\\201714VUE\\node_modules',
        'F:\\webstorm\\node_modules',
        'F:\\node_modules' ] },
  extensions: { '.js': [Function], '.json': [Function], '.node': [Function] }, 默认文件后缀的匹配顺序

   cache: 缓存机制  多次require同一个模块,默认只会走一个
 */
require("./1.js");
require("./1.js");
require("./1.js");
require("./1.js");
require("./1.js");
require("./1.js");
require("./1.js");
require("./1.js");

console.log(module);
//module.exports导出当前模块