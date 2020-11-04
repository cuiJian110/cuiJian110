import { post, postForm, postJson } from '@/apis/base';
function getUrl(url) {
    return "ehr-crm/" + url;
}
export default {
  //训练营label列表
  label_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/trainingCamp/label/list'), reqdata, {})
  },
  //训练营label添加标签
  label_insert(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/trainingCamp/label/insert'), reqdata, {})
  },
  //训练营template列表删除
  template_page(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/trainingCamp/template/page'), reqdata, {})
  },

  //训练营label查看
  label_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/trainingCamp/label/list'), reqdata, {})
  },

  //我的学习查看
  myStudy_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/trainingCamp/myStudy/list'), reqdata, {})
  },

  //训练营班级列表
  certificate_classPage(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('study/trainingCamp/certificate/classPage'), reqdata, {})
  },
}