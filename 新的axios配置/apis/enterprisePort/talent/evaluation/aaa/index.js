import { post, postForm, postJson } from '@/apis/base';
function getUrl(url) {
    return "ehr-crm/" + url;
}
export default {
  //训练营列表
  label_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/trainingCamp/label/list'), reqdata, {})
  },
  //训练营添加标签
  label_insert(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/trainingCamp/label/insert'), reqdata, {})
  },
  //训练营列表删除
  label_del(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/trainingCamp/label/del'), reqdata, {})
  },
}