import Vue from 'vue'
import Promise from 'promise';
import Cache from './cache';
import { getBaseUrl } from '../const.js'
import {
  Message
} from 'iview'
import theloading from '@/components/common/loading.js'

let getApiUrl = (apiUrl, url) => {
  var baseUrl = getBaseUrl();
  apiUrl = apiUrl || baseUrl;
  return apiUrl + url;
}


/**
 * method
 */

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


export let blocker = () => {
  Vue.http.interceptors.push({
    request: function (request) {
      return request;
    },
    response: function (response) {
      return response;
    }
  });

}



window.ajaxQueue = {

  checkInQueue: (key) => {

    window.ajaxQueueData = window.ajaxQueueData || {};
    let queue = window.ajaxQueueData;
    console.log(queue);


    if (!queue[key]) {  //not in
      queue[key] = 1;
      return null;
    } else {

      return new Promise(function (resolve, reject) {

      });

    }
  },
  remove(key) {
    window.ajaxQueueData = window.ajaxQueueData || {};
    delete window.ajaxQueueData[key];
  }

}


/**
 *
 * @param opts:{
 *
 *  cache:{       //cache不传则不开启
 *    exp:1,      //0 不开启
 *    read:-1,    //-1不开启
 *  }
 * }
 * @param parseFunc
 * @returns {*}
 */
export let createApi = (opts, parseFunc) => {

  let cachepattern = opts.cache;

  let cacheKey = opts.cacheKey;

  //强制更新
  if (opts.update) {
    Cache.remove(cacheKey);
  }

  var headerConfig = {};

  if (opts.headers) {
    for (let key in opts.headers) {
      headerConfig[key] = opts.headers[key];
    }
  }

  // if (opts.isStream) {
  //   headerConfig['Content-Type'] = undefined;//'application/octet-stream';
  // } else {
  //   headerConfig['Content-Type'] = ContentType.NORMAL;
  // }

  let options = {
    method: opts.method || "GET",
    url: opts.url,
    params: opts.params || {},
    body: opts.data || {},
    headers: headerConfig,
    cache: false,
    timeout: 100000,
    emulateJSON: true
    //withCredentials:true
  }

  let loadingBar = opts.progress;
  if (!loadingBar) {

  }
  var promise = new Promise(function (resolve, reject) {
    /**请求加载*/
    Vue.http(options).then(function (response) {
      let resp = response.body;
      // console.log(resp,'resp');

      if (resp.code == 200) {
        cachepattern && Cache.set(cacheKey, resp, cachepattern);
        window.ajaxQueue.remove(cacheKey);
        resolve(resp);
      } else if (resp.code == 401) {
        window.ajaxQueue.remove(cacheKey);
        // console.log('sdfdslfjlsdjf1');

        Message.error({
          content: "离线状态请重新登录"
        },1.5, function () {
          // console.log('sdfdslfjlsdjf');
          
          location.href = './login.html'
        });
        setTimeout(() => {
          location.href = './login.html'
          
        }, 1500);
      } else {
        window.ajaxQueue.remove(cacheKey);
        if (resp.errCode == "clg1006") {
          Message.error({
            content: resp.message || '网络繁忙'
          });
          theloading.hide();
        } else {
          Message.error({
            content: resp.message || '网络繁忙'
          });
          reject(response);
          theloading.hide();
        }

      }
    }, function (response) {
      window.ajaxQueue.remove(cacheKey);
      let status = response.status;


      if (status == 401) {
        Message.error({
          content: "离线状态请重新登录"
        }, function () {
          location.href = './login.html'
        });
        setTimeout(() => {
          location.href = './login.html'
        }, 1500);
      } else if (status == 300) {
        Message.error({
          content: "请先登录"
        }, 1.5, function () {
          location.href = './login.html'
        });
      } else if (status == 403) {
        Message.error({
          content: "没有操作权限"
        });
        theloading.hide();

      } else if (status == 500) {
        Message.error({
          content: "请求报错,请稍后再试."
        });
        theloading.hide();

        reject(status);
      } else if (status == 404) {
        Message.error({
          content: "请求报错,请稍后再试."
        });
        theloading.hide();

        reject(status);
      } else {
        Message.error({
          content: "请确认网络连接是否正常."
        });
        theloading.hide();

        reject(status);
      }
    })

  });
  return promise;
};
let getCacheKey = (url, data) => {
  data["_"] = undefined;
  return url + JSON.stringify(data);
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

let getClearJsonPData = function (data) {
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

export let getParamsOne = (url, param, opts = {}, parseFunc = undefined) => {
  let requestUrl = getApiUrl(opts.apiUrl, url) + '/' + `${param}`;
  let data = {};
  let cacheKey = getCacheKey(url, data);
  data["_"] = Math.random();
  opts.url = requestUrl;
  opts.cacheKey = cacheKey;
  opts.method = METHOD.GET;
  opts.params = getClearData(data);
  return createApi(opts, parseFunc);
}

export let get = (url, data = {}, opts = {}, parseFunc = undefined) => {
  let requestUrl = getApiUrl(opts.apiUrl, url);
  let cacheKey = getCacheKey(url, data);
  data["_"] = Math.random();
  opts.url = requestUrl;
  opts.cacheKey = cacheKey;
  opts.method = METHOD.GET;
  opts.params = getClearData(data);
  return createApi(opts, parseFunc);
}

export let post = (url, data = {}, opts = {}, parseFunc = undefined) => {
  let requestUrl = getApiUrl(opts.apiUrl, url);
  let cacheKey = getCacheKey(url, data);
  data["_"] = Math.random();
  opts.url = requestUrl;
  opts.cacheKey = cacheKey;
  opts.method = METHOD.POST;
  opts.headers = opts.headers || {};
  opts.headers['Content-Type'] = ContentType.NORMAL;
  opts.data = getClearData(data);
  return createApi(opts, parseFunc);
}

export let postjson = (url, data = {}, opts = {}, parseFunc = undefined) => {
  let requestUrl = getApiUrl(opts.apiUrl, url);
  let cacheKey = getCacheKey(url, data);
  data["_"] = Math.random();
  opts.url = requestUrl;
  opts.cacheKey = cacheKey;
  opts.method = METHOD.POST;
  opts.headers = opts.headers || {};
  opts.headers['Content-Type'] = ContentType.JSONTYPE;
  opts.data = getClearJson(data);
  return createApi(opts, parseFunc);
}
export let postform = (url, data = {}, opts = {}, parseFunc = undefined) => {
  let requestUrl = getApiUrl(opts.apiUrl, url);
  let cacheKey = getCacheKey(url, data);
  opts.url = requestUrl;
  opts.cacheKey = cacheKey;
  opts.method = METHOD.POST;
  opts.headers = opts.headers || {};
  opts.headers['Content-Type'] = ContentType.FORMTYPE;
  // opts.params = getClearJsonPData(data);
  opts.data = getClearJFormPData(data);

  return createApi(opts, parseFunc);
}
export let createOptions = (opts = { apiUrl: "/" }) => {
  return opts;
}




