安装
```
npm install webpack --save -dev
yarn add webpack --dev    
```

### 编译ES6 > ES5
安装
```
npm install babel --save-dev
npm install babel-core --save-dev
npm install babel-loader --save-dev

yarn add babel --dev
yarn add babel-core --dev
yarn add babel-loader --dev
```

### 识别es2015
```
npm install babel-preset-es2015 --save-dev

yarn add babel-preset-es2015 --dev

```

###配置一下语法编译
.babelrc 文件
```
{ "presets": ["es2015"]}
```
###解析ES7
```
stage-0; 范围更大
stage-1;
stage-2;
stage-3;
stage-4; 范围最小 

npm install babel-perset-stage-0 --save-dev

yarn add babel-preset-stage-0 --dev

```

### 解析css
安装
```
//编译css的
npm install css-loader --save-dev

//构造一个style标签将编译后的css 放进来
npm install style-loader --save-dev
```

### 解析css的预处理
- less
- sass
- stylus

```
npm install less --save-dev
npm install less-loader --save-dev

```

### 解析图片
```
npm install file-loader --save-dev
npm install url-loader --save-dev  (依赖上面的)

```
### 安装解析html插件
以我们自己写的html作为模板 再把打包后的js引入到 html中生成一个新的html文件(在dist文夹下) 上线使用的
```
npm install html-webpack-plugin --save-dev

```
### webpack开发服务
安装
在内存中打包不会显示dist
```
npm install webpack-dev-server --save-dev

```