let http=require("http"),
    url=require("url"),
    fs=require("fs");

http.createServer((req,res)=>{
    let {pathname,query}=url.parse(req.url,true);
    let reg=/\.[0-9a-zA-Z]+$/i;
    if(pathname=="/"){
        //将页面读取出来返回
        fs.readFile("./4.messageBoard.html","utf-8",(e,val)=>{
            res.end(val);
        });
    };
    if(reg.test(pathname)){
        fs.readFile("."+pathname,"utf-8",(e,val)=>{
            if(e){
                res.end("sorry");
            }else {
                res.end(val);
            }
        })
    };
    if (pathname=="/a"){
        res.end("hello")
    }
}).listen(999,()=>{
    console.log("OK");
});
