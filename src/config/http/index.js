
import axios from 'axios';

const BASE_URL = 'http://localhost:9090';

const http = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    },
    display: false,
    msg: '',
    timeout: 5000
});


// 请求拦截器
http.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    if (config.method === 'post') {
        config.data = config.data.data;
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 响应拦截器
http.interceptors.response.use(response => {
    // 对响应数据做些什么
    if (response.config.display) {
        // 若用户自定义了提示消息，则使用用户的消息，否则使用接口返回的消息
        let msg = response.config.msg ? response.config.msg : response.data.message
        console.log(msg)
    }
    return response;
}, error => {
    // 对响应错误做些什么
    if (error.response && error.response.status === 500) {
        console.error('服务器出错了，请稍后再试！');
    }
    return Promise.reject(error);
});



export default http;