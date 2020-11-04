import { post, postForm, postJson } from '@/apis/base';
function getUrl(url) {
    return "ehr-crm/" + url;
}
export default {
  //内部教练查看
  interiorCoach_page(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/coachManage/interiorCoach/page'), reqdata, {})
  },
}
