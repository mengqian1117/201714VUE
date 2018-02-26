let http=require("http");
let url=require("url");
let fs=require("fs");

//获取 slides
let slides=require("./slides");
http.createServer((req,res)=>{
  //跨域问题
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1');
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/

  //根据url模块解析req的url,通过解构赋值获取pathname和query(解析的时候传一个参数true这样query就是一个对象)
  let {pathname,query}=url.parse(req.url,true);
  //处理api接口
  if(pathname=="/slides"){
    //setHeader(属性名,属性值) 设置响应头
    res.setHeader("Content-type","application/json;charset=utf8");
    res.end(JSON.stringify(slides));
  }
}).listen(6789,()=>{
  console.log("success");
});
