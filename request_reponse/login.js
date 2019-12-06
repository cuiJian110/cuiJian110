/*
 * @Author: your name
 * @Date: 2019-12-03 10:47:33
 * @LastEditTime: 2019-12-03 10:50:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \request_reponse\login.js
 */
import { serverSrc } from '../config';
import request from './request';


// 获取rsa 公钥
export function getRsa() {
  return request({ url: `${serverSrc}/rsa`, msg: '加密失败' });
}

// 登录
export function login(body) {
  return request({
    url: `${serverSrc}/login`, msg: '登录失败', method: 'post', body,
  });
}
