
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
 
 三种模块
 - 内置模块    require("模块名字")
 - 第三方模块  require("模块名字") 自动查找路径和匹配后缀(.js .json  .node)
 - 自定义模块  require("./文件名字") 后缀可以省略(.js .json  .node)
 
 ## 模块默认传5个参数可以使用 arguments打印出来
 最好直接使用下面的属性
 exports require module  __filename  __dirname
 
 - exports==this
 - require 没有导出可以不用接收,导入的文件会执行
 - require 有接收的内容 导入的文件必须要导出
 - module.exports 导出内容 
     - 以后最常见的是导出一个类 经常使用es6 class类
     - 导出一个对象 接收的时候一般{}解构一下
     
npm安装,包管理器 ,yarn想把npm干掉超过他

 安装:
 npm install yarn -g    
 npm install -g  yarn   g在前后一样的
 npm i -g  yarn         install 可以缩写
 
 yarn命令
 yarn init -y  初始化
 yarn add 包的名字 
 yarn add 包的名字 --dev 开发依赖
 yarn remove 包的名字
 yarn install 跑环境
 
 nrm 管理源
 nrm ls  查看所有可用源
 
 发布包
 - 使用npm源  nrm use npm
 - 自己写的包的名字不可以用已经发布过的包了(自己想好一个名字去npm网站上搜一下有没有重名的)
 - 加一个入门文件 main 文件 "index.js"
 - 注意写这个index.js的时候不要忘了导出module.exports
 - 你的包可以依赖其他的包 (别人安装你的包,默认就会将其他依赖的包也安装了)
 - 注册/登录
 ` npm addUser`
 `username:` 如果之前没有注册过就是注册
 `passWord:` 密码不要和username相同
 `Email:` 第一次注册需要邮箱验证 先去npm网站上登录一下,会看到让你去验证邮箱的信息,去打开邮箱验证,
 验证完成之后回到cmd命令窗口
 `npm publish`等待完成
 - 其他人就可以下载安装使用了 npm install安装即可
 
 
 
 
 
 