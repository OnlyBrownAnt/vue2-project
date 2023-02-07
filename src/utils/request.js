import axios from "axios";
import { startLoading, cancelLoading } from "@/utils/common";
const instance = axios.create({
    baseURL: '/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }
})

instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    response => {
    return Promise.resolve(response);
}, error => {
    return Promise.reject(error);
})

export function request({url, method, params = {}, data = {}}) {
    return new Promise((resolve, reject) => {
        startLoading();
        instance({
            url,
            method,
            params,
            data
        }).then(res => {
            cancelLoading();
            resolve(res.data);
        }).catch(error => {
            cancelLoading();
            if (error.response) {
                // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
                reject(error.message);
            } else if (error.request) {
                // 请求已经成功发起，但没有收到响应
                // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
                // 而在node.js中是 http.ClientRequest 的实例
                reject(error.message);
            } else {
                // 发送请求时出了点问题
                reject(error.message);
            }
        })
    })
}
