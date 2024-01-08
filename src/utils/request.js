import axios from "axios";

const api= axios.create({
    baseURL:"https://9ebd086a-786b-4864-98ec-b92e5971ed9c.mock.pstmn.io",
    timeout:5000
})

// // 请求拦截
// api.interceptors.request.use((config)=>{
//     return config
// },(error)=>{
//     return Promise.reject(error);
// })

// // 响应拦截
// api.interceptors.response.use((response)=>{
//     return response.data;
// },(error)=>{
//     return Promise.reject(error);
// })


// 封装request模块
const request = async (method, url, data = null) => {
  try {
        const response = await api({
            method: method,
            url: url,
            data: data,
        });
        return response.data;
    } catch (error) {
        // 处理请求失败的情况
        console.error('Request failed:', error);
        throw error;
    }
};

export default request;