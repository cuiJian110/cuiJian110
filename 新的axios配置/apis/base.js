import axios from "axios"
import QS from "qs";
import { Message, Spin } from 'iview';
import { getBaseUrl } from "@/apis/const.js"
export let METHOD = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH",
    JSONP: "JSONP"
}
export let ContentType = {
    NORMAL: "application/x-www-form-urlencoded",
    JSONTYPE: 'application/json;charset=utf-8',
    FORMTYPE: 'multipart/form-data'
}
let getClearData = function (data) {
  let _data = {

  };
  for (let prop in data) {
    let item = data[prop];
    if (item != undefined) {
      _data[prop] = item;
    }
  }
  return _data;
}
let getClearJFormPData = function (data) {
    let _data = {
    };
    let formdata = new FormData();
    for (let prop in data) {
      let item = data[prop];
      if (item != undefined) {
        // _data[prop] = item;
        formdata.append(prop, item);
      }
    }
    return formdata;
}
let getClearJson = function (data) {
  let _data = {

  };
  for (let prop in data) {
    let item = data[prop];
    if (item != undefined) {
      _data[prop] = item;
    }
  }
  return JSON.stringify(_data);
}

axios.interceptors.request.use((request) => {
    if(request.url.includes("auth/getToken") || request.url.includes("user/sendCode")) {
      // 登录接口
    } else {
      // 其他接口
      const personalToken = localStorage.getItem("personalToken") || "";
      request.headers.token = personalToken;
      const Authorization = localStorage.getItem("Authorization") || "";
      request.headers.Authorization = Authorization;
    }
    // 系统级参数-设备唯一token
    request.headers.imei = 0;
    // 系统级参数-设备平台,可用值:Android,Iphone,API
    request.headers.platform = "API";
    // 系统级参数-请求的时间戳13位
    request.headers.timestamp = Date.parse(new Date());
    // 系统级参数-设备唯一token
    request.headers.version = "1.0";
    // Message.error('This is an error tip');
    // console.log(request);
    // 在拦截器中
    // request.headers[属性名]可以在请求头里添加属性
    // 判断是否登录
    // request.headers.personalToken = "myToken11111111111";

    // if(request.method === "post") {
    //     request.data = QS.stringify(request.data);
    // }
    // Do something before request is sent
    return request;
  }, (error) => {
    console.log("request-----:",error);
    console.log("错误了，",error)
    // Do something with request error
    return Promise.reject(error);
  });
const createApi = function(options) {
  return new Promise((res, rej) => {
      // Spin.show();
      axios(options).then(res_ => {
        const resData = res_.data;
        res(resData);
        if(resData.code !== 200) {
          if(resData.code === 500) {
            Message.error({
              content: resData.message
            });
            setTimeout(() => {
              // location.href = './login.html'
            }, 1500);
          } else {
            Message.error({
              content: resData.message
            });
          }
        }
      }).catch(err => {
        console.dir(err)
        let status = err.response.status;
        if (status == 401) {
          Message.error({
            content: "接口权限错误"
          });
        } else if (status == 500) {
          Message.error({
            content: "请求报错,请稍后再试."
          });
        } else if (status == 404) {
          Message.error({
            content: err.response.data.msg
          });
        } else {
          Message.error({
            content: "请确认网络连接是否正常."
          });
        } 
        rej(err.response)
      })
  })
}
export const get = function(url,params) {
  const opts = {
    url: getBaseUrl() + url,
    method: METHOD.GET,
    params: params
  };
  return createApi(opts);
}
export const post = function(url,params) {
  const opts = {
    url: getBaseUrl() + url,
    method: METHOD.POST,
    data: QS.stringify(params),
    headers: {
      'Content-Type': ContentType.NORMAL
    },
  };
  return createApi(opts);
}
export const postJson = function(url,params) {
    const opts = {
      url: getBaseUrl() + url,
      method: METHOD.POST,
      data: params,
      headers: {
        'Content-Type': ContentType.JSONTYPE
      }
    };
    return createApi(opts);
}
export const postForm = function(url,params) {
  const opts = {
    url: getBaseUrl() + url,
    method: METHOD.POST,
    data: getClearJFormPData(params),
    headers: {
      'Content-Type': ContentType.FORMTYPE
    }
  };
  return createApi(opts);
}
export const postExport = function(url,params) {
  const opts = {
    url: getBaseUrl() + url,
    method: METHOD.POST,
    data: params,
    responseType: 'blob',
    headers: {
      // 'Content-Type': ContentType.JSONTYPE
    }
  };
  return createApi(opts);
}