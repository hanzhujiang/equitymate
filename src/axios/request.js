import axios from 'axios'
import { Message } from 'element-ui'
// import Vue from 'vue'
import router from '../router'
import { showLoading, hideLoading } from '../assets/js/loading.js';
// import { aes } from "./crypto.js";
// import { getToken, TokenKey } from '@/utils/auth'
// const Base64 = require('js-base64').Base64
// create an axios instance
const service = axios.create({
    timeout: 200000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8;multipart/form-data',
    },
    withCredentials: true
})

service.interceptors.request.use(config => {
    showLoading();
    // if (config.aes) {
    //     config.params = {encrypt: aes.en(JSON.stringify(config.params))};        
    // }
    config.data = JSON.stringify(config.params);
    // config.headers.Authorization=window.sessionStorage.getItem('token');
    // console.log(config);
    
    return config
}, error => {
    Promise.reject(error)
})
service.interceptors.response.use(
    response => {
        hideLoading();
        const res = response.data;
        if (res.code == 403) {
            Message.closeAll()
            Message({
                message: 'Session expired',
                type: 'error',
                duration: 5 * 1000
            });
            router.push('/Login')
            return Promise.reject('error');
        }
        // console.log(response,'response')
        return response
    },
    error => {
        Message({
            message: error + '',
            type: 'error',
            duration: 5 * 1000
        })
        // hideLoading();
        return Promise.reject(error)
    }
)
export default service