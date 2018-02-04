
##nvm
node的版本管理器,如果你的项目有的基于node版本是6.0有的是8.0,你的电脑上需要装几个版本的node, 就是 nvm来来管理他
window不可以使用,使用的是nvm-windows

##环境变量:
只要是装了node默认就会配置好你的环境变量 在cmd中输入node 默认执行(启动的程序)的是环境变量中配置的路径下的node.exe
 直接运行node.exe程序跟在cmd中输入node回车是一样的,(因为我们的js可以在浏览器运行,在浏览器的控制台可以写js代码运行,node.exe就是node环境的控制台)
 
 ##运行node
 在webstorm中右键运行run 1.test.js 就相当于在cmd中当前目录下 输入node 1.test.js 是一样的,但是webstorm偶尔会有缓存,有一些错误提示或者信息显示不出来
 
 ##模块化开发
 sea.js require.js  cmd规范和amd规范  课下自己去扩展一下
 单利模式  就是一个对象(命名空间)
 let obj={}  
 let obj=(function(){return {}})();
 
 模块 就是一个闭包 (function(){})()
 
 ##node模块
 node是按照commonjs规范来实现模块的,node自带模块化
 一个JS就是一个(模块)闭包
 
 