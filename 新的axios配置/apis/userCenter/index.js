import { post, postForm, postJson } from '../base';
function getUrl(url) {
    return "ehr-admin/" + url;
}
export default {
  //获取当前企业端token
  index_token(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('index/token'), reqdata, {})
  },
  //获取企业云信息
  branchOffice_getOffice(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('branchOffice/getOffice'), reqdata, {})
  },
  //更新企业云信息
  branchOffice_update(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('branchOffice/update'), reqdata, {})
  },
  //当前登录企业用户信息
  user_userInfo(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('user/userInfo'), reqdata, {})
  },
}