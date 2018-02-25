let path=require("path");
let HtmlWebpackPlugin=require("html-webpack-plugin");
//console.log(path.resolve("./dist"));
//F:\webstorm\201714VUE\week3\day1\dist
module.exports={
    entry:"./src/js/main.js",//入口文件
    output:{
        filename:"build.js",
        path:path.resolve("./dist"),//必须是一个绝对路径
    },
    module:{
        rules:[
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.css$/,use:["style-loader","css-loader"]},//顺序从右往左
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},//顺序从右往左
            {test:/\.(jpg|gif|jpeg)$/i,use:["url-loader?limit=3072"]},//不超过3072字节的
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",//打包后的html,
            template:"./src/index.html"
        })
    ]
};