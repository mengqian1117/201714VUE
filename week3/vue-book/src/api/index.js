//这里放所有的请求方法
import axios from "axios";
//设置请求url的基础路径
//例如 /slides 实际请求的是 http://localhost:6789/slides
axios.defaults.baseURL="http://localhost:6789";
//将返回的数据直接替换成res.data
axios.interceptors.response.use(res=>res.data);
//导出所有的方法
export let getSlides=()=>{
  return axios.get("/slides");
};
export let getHot=()=>{
  return axios.get("/hot");
};
export let getBooks=()=>{
  return axios.get("/book");
};
export let deleteBook=(id)=>{
  return axios.delete("/book?id="+id);
};
export let getBook=(id)=>{
  return axios.get("/book?id="+id);
};
export let changeBook=(id,data)=>{
  return axios.put("/book?id="+id,data);
};
export let addBook=(data)=>{
  return axios.post("/book",data);
};
