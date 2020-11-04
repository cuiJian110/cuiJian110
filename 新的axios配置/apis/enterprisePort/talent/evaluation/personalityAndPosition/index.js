import { post, postForm, postJson } from '@/apis/base';
function getUrl(url) {
    return "ehr-crm/" + url;
}
export default {
  //测评统计
  personalityAndPosition_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('talent/evaluation/personalityAndPosition/list'), reqdata, {})
  },
}
