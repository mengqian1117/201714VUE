//这里放所有的请求方法
import axios from "axios";
//设置请求url的基础路径
//例如 /slides 实际请求的是 http://localhost:6789/slides
axios.defaults.baseURL="http://localhost:6789";
//导出所有的方法
export let getSlides=()=>{
  return axios.get("/slides")
};
