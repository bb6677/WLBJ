import axios from "axios";

import { serverUrl } from "@/utils/tools";
import { getToken } from "@/utils/tools";
// import { removeToken } from "@/utils/tools";

import { Notify } from "vant";

const instance = axios.create({
  timeout: 5000,
  baseURL: serverUrl,
});

instance.interceptors.request.use(
  function(config) {
    config.headers.token = getToken();
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(function (response) {

//   return response;
// }, function (error) {

//   return Promise.reject(error);
// });
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function(error) {
    console.dir(error);
    if (error.message && error.message.indexOf("timeout") > -1) {
      Notify({
        type: "danger",
        message: "网络不稳定，请刷新重试",
      });
    }
    // if (error.response && error.response.status === 401) {
    //   Notify({
    //     type: "danger",
    //     message: "用户信息异常",
    //   });
    //   removeToken(); // 清除原有的token
    //   window.location.href = "/#/login";
    // }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

/**
 *  请求的方法
 * @param {*} url
 * @param {*} params
 */
export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const del = (url) => instance.delete(url); //这里没有第二个参数（第二个参数是请求体）
