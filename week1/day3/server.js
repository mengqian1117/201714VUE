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
        });
        return;
    };
    if(pathname=="/getMessage"){
        //将数据读出来返回给客户端
        fs.readFile("./data/message.json","utf-8",(e,val)=>{
            if(e){
                res.end("[]");
            }else {
                res.writeHead(200,{
                    "content-type":"text/json;charset=utf-8",
                });
                res.end(val);
            }
        });
        return;
    };
    if(pathname=="/postMessage"){
        let data="";
        req.on("data",(chunk)=>{data+=chunk});
        req.on("end",()=>{
            //在这里拼接好了的数据data就是一个JSON字符串
            //'{"title":"1","content":"1"}'
            data=JSON.parse(data);
            //先将数读取出来变成JSON对象 在将data push进去,最后再写入到数据库
            fs.readFile("./data/message.json","utf-8",(e,val)=>{
                let arr=JSON.parse(val);
                arr.push(data);
                data=JSON.stringify(arr);
                fs.writeFileSync("./data/message.json",data,"utf-8");
                res.end(data);
            });

        });

    }

}).listen(999,()=>{
    console.log("OK");
});
