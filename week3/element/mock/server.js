let http=require("http");
let url=require("url");
let fs=require("fs");
let path=require("path");
let getData=(url,cb)=>{
  fs.readFile(url,"utf-8",(e,val)=>{
    if(e) cb([]);
    cb(JSON.parse(val));
  })
};
http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1');
  if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/

  let {pathname,query}=url.parse(req.url,true);
  if(pathname=="/user"){
    let data="";
    req.on("data",(chunk)=>{data+=chunk});
    req.on("end",()=>{
      //data 是个字符串
      data=JSON.parse(data);
      getData("./userList.json",(val)=>{
        //根据 data 去val 中找到对应的数据 对比 user和pw
        let result={message:"", code:0, user:{},};
        let user=val.find(item=> item.user==data.user);
        if(user){
          if(user.pw==data.pw){
            result={message:"success",code:1,user:user}
          }else {
            result={message:"密码不正确",code:0,user:{}}
          }
        }else {
          result={message:"账户不存在",code:0,user:{}}
        }
        res.end(JSON.stringify(result));
      })
    });
  }
}).listen(6789,()=>{
  console.log("ok");
});
