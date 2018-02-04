//console.log(process.env);//配置环境变量
//开发时候自己写一个服务 监听了一个端口号.自己访问测试代码时候 http://localhost:8888,但是代码上线了不可以走这个地址了 访问的可能是 http://zhufengpeixun.com
//怎么判断是开发环境 我们可以给他设置一个环境变量
//1. 在命令窗口设置 环境变量 ,必须在命令窗口运行这个js,在webstorm运行获取不到
//  - windows set  NODE_ENV(名字)=dev值
//  - mac   export NODE_ENV(名字)=dev值

//2.在webstorm配置
let url="";

if(process.env.NODE_ENV=="dev"){
    url="http://localhost:8888"
}else {
    //线上环境
    url="http://zhufengpeixun.com"
}
console.log(url);

console.log(process.env.NODE_ENV);
