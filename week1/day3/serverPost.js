let http=require("http"),
    url=require("url"),
    fs=require("fs");
http.createServer((req,res)=>{
    let {pathname}=url.parse(req.url);
    let reg=/\.[0-9a-zA-Z]+$/i;
    if(pathname=="/"){
        fs.readFile("./5.POST.html","utf-8",(e,val)=>{
            res.end(val)
        });
        return;
    }
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
    if(pathname=="/POSTA"){
        let data='';
        req.on("data",a=>{data+=a});
        req.on("end",()=>{
            console.log(data);
            res.end("OK")
        });
    }
}).listen(6789,()=>{
    console.log("OK");
})