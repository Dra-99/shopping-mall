import axios from "axios"
import nprogress from "nprogress"
import "nprogress/nprogress.css"

// 创建axios实例
const api = axios.create({
    baseURL: "/api",
    timeout: 5000
});

// 请求拦截器
api.interceptors.request.use(config => {
    nprogress.start()
    return config;
})

// 响应拦截器
api.interceptors.response.use((response) => {
    nprogress.done()
    return response.data
})

export default api