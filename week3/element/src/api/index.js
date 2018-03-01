import axios from "axios"
axios.defaults.baseURL="http://localhost:6789";
axios.interceptors.response.use((res)=>res.data);
export let login=(data)=>{
  return axios.post("/user",data);
};
