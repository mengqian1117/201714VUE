let path=require("path");
let HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/main.js",
    output:{
        filename:"build.js",
        path:path.resolve("./dist"),
    },
    module:{
        //编译处理  js,css,less,图片 ,vue
        rules:[
            //test :匹配编译文件的
            //use :[]使用的什么模块来编译(你在node_modules安装的一些编译的包),注意编译是有顺序,从右到左的顺序
            //exclude :过滤掉.排除掉
            {test:/\.js$/,use:["babel-loader"],exclude:/node_modules/},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            ///默认将图片处理为base64 我们可以限制一下,图片小的时候转,太大就不用转了
            //大小限制在 5kb(5*1024字节)一下
            {test:/\.(jpg|png|gif|jpeg)/i,use:["url-loader?limit=5120"]}
        ]
    },
    plugins:[
        //html-webpack-plugin 导出了一个类 HtmlWebpackPlugin,方法都在原型上,需要new一个实例来使用
        new HtmlWebpackPlugin({
            // filename:"main.html",
            // 不写filename 默认在dist文件下生成一个index.html(上线使用的)
            template:"./src/index.html",//原来的html(开发使用的html)
        })
    ]
};