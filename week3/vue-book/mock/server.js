let http=require("http");
let url=require("url");
let fs=require("fs");

//读取数据
function getData(cb) {//传进一个函数
  fs.readFile("./book.json","utf8",(e,val)=>{
    if(e)return cb([]);
    cb(JSON.parse(val))
  })
}

//获取 slides
let slides=require("./slides");
http.createServer((req,res)=>{
  //跨域问题
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1');
  if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/

  //根据url模块解析req的url,通过解构赋值获取pathname和query(解析的时候传一个参数true这样query就是一个对象)
  let {pathname,query}=url.parse(req.url,true);
  //处理api接口
  if(pathname=="/slides"){
    //setHeader(属性名,属性值) 设置响应头
    res.setHeader("Content-type","application/json;charset=utf8");
    res.end(JSON.stringify(slides));
    return;
  };
  if(pathname=="/hot"){
    getData((data)=>{
      //这个函数肯定是读取完成之后执行的
      data.reverse();
      res.setHeader("Content-type","application/json;charset=utf8");
      res.end(JSON.stringify(data))
    });
    return;
  };
  if(pathname=="/book"){
    let method =req.method;
    let id=query.id;
    //根据请求方式来做不同的数据返回处理
    switch (method){
      case "GET":
        if(id){//获取一个图书的信息
          //读取全部数据,根据id找出对应的数据返回给客户端
          getData((data)=>{
            let book=data.find((item)=>item.bookId==id);
            res.setHeader("Content-type","application/json;charset=utf8");
            res.end(JSON.stringify(book));
          })
        }else {//获取全部图书的信息
          //读取出全部数据返回给前端
          getData((data)=>{
            res.setHeader("Content-type","application/json;charset=utf8");
            res.end(JSON.stringify(data));
          })
        }
        break;
      case "POST":
        //增加新图书
        let data='';
        req.on("data",(chunk)=>{data+=chunk});
        req.on("end",()=>{
          getData((books)=>{
            data=JSON.parse(data);
            //先给数据增加bookId,注意如果数据原来是空的,给他一个bookId为1
            data.bookId=books.length?books[books.length-1].bookId+1:1;
            //将data push到books中
            books.push(data);
            fs.writeFile("./book.json",JSON.stringify(books),"utf8",(e)=>{
              res.setHeader("Content-type","application/json;charset=utf8");
              if(e)res.end("error");
              res.end("success")
            })
          })
        });
        break;
      case "PUT":
        //修改数据  需要参数id,需要修改后的数据
        if(id){
          let data="";
          req.on("data",(chunk)=>{data+=chunk});
          req.on("end",()=>{
            //先读取数据,根据id找到对应的数据,将其修改
            getData((val)=>{
              val=val.map((item)=>{
                if(item.bookId==id)return JSON.parse(data);
                return item;
              });
              //写入新数据
              fs.writeFile("./book.json",JSON.stringify(val),"utf8",(e)=>{
                res.setHeader("Content-type","application/json;charset=utf8");
                if(e)res.end("error");
                res.end("success");
              });
            });
          });
        }
        break;
      case "DELETE":
        //根据query中的id值,将读取的数据中删除这一条数据,再将修改后的数据写入到book.json 中
        getData((data)=>{
          data=data.filter(item=>item.bookId!=id);
          fs.writeFile("./book.json",JSON.stringify(data),"utf8",(e)=>{
            res.setHeader("Content-type","application/json;charset=utf8");
            if(e) return res.end("error");
            res.end("success")
          })
        });
        break;
    }
  }
}).listen(6789,()=>{
  console.log("success");
});
