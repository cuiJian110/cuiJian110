import { post, postForm, postJson } from '../base';
function getUrl(url) {
    return "ehr-support/" + url;
}
export default {
  //企业端列表
  upload_admin(param) {
      let reqdata = param ? param : {};
      return postForm(getUrl('upload/admin'), reqdata, {})
  },
}