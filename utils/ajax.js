import axios from 'axios';

const ajax = axios.create({
    baseURL: process.env.VUE_APP_API,
});

//请求拦截器
ajax.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        console.log(err);
    }
);

//响应拦截器
ajax.interceptors.response.use(
    (response) => {
        const { data } = response;

        console.log(data, '响应拦截器');

        return data;
    },
    (err) => {
        console.log(err);
        alert('服务相应异常');
    }
);

export default ajax;
