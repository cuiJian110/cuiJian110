import { post, postForm, postJson } from '@/apis/base';
function getUrl(url) {
    return "ehr-crm/" + url;
}
export default {
  //我的课程列表
  myCourse_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/course/myCourse/list'), reqdata, {})
  },
  //课程管理列表
  manage_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/course/manage/list'), reqdata, {})
  },
}