##1.安装webpack 
```
 npm install webpack --save-dev
```
##2.安装 babel转义 支持es6 es7
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 --save-dev
```

##3安装 解析HTML的插件 html-webpack-plugin
```
npm install html-webpack-plugin --save-dev
```
##4.安装 webpack-dev-server   默认将打包的内容在内存中.只需要访问http://localhost:8080/ 就可以查看自己的打包后的项目,修改页面会自动打包跟新,不需要自己手动打包刷新
```
npm install webpack-dev-server --save-dev
```

## 5.解析css  
需要安装 style-loader 
```
npm install style-loader css-loader --save-dev
```

## 5.安装less解析
```
npm install less less-loader --save-dev
```

## 6.安装 路径解析
file-loader url-loader(默认依赖 file-loader)
```
npm install file-loader url-loader --save-dev
```