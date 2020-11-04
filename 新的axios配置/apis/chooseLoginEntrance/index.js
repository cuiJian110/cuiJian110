import { post, postForm, postJson } from '../base';
function getUrl(url) {
    return "ehr-admin/" + url;
}
export default {
  //当前登录用户信息
  user_verifyToken(param) {
    let reqdata = param ? param : {};
    return postForm(getUrl('user/verifyToken'), reqdata, {})
  },
  //企业端列表
  index_officeList(param) {
      let reqdata = param ? param : {};
      return postForm(getUrl('index/officeList'), reqdata, {})
  },
  //创建企业云
  index_insert(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('index/insert'), reqdata, {})
  },
}