import axios from "axios";

import { serverUrl } from "@/utils/tools";
import { getToken } from "@/utils/tools";
import { removeToken } from "@/utils/tools";

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
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    if (error.response && error.response.status === 401) {
      Notify({
        type: "primary",
        message: "用户信息异常",
      });
      removeToken();
      window.location.href = "/#/Login";
    }
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
