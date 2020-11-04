import Promise from 'promise';
import expireStorage from './store.expire';
/*
 缓存策略
 */
export default {

  remove(key){
    expireStorage.remove(key);
  },
  set(key,data,pattern){
    expireStorage.set(key,data,pattern);
  },

  get(key){

    if(window.debug){
      return null;
    }


    let resData = expireStorage.get(key);

    if (resData) {
      var promise = new Promise(function (resolve, reject) {

        setTimeout(function () {

          if (resData.code == 200) {
            resolve(resData.data);
          } else {
            reject(resData);
          }
        }, 0);

      });

      return promise;

    } else {
      return null;
    }

  }


}
