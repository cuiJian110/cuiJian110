import { post, postForm, postJson,postExport } from '@/apis/base';
function getUrl(url) {
    return "ehr-crm/" + url;
}
export default {
  //组织定义列表
  definition_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/definition/list'), reqdata, {})
  },
  //组织定义insert
  definition_insert(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/definition/insert'), reqdata, {})
  },
  //组织定义update
  definition_update(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/definition/update'), reqdata, {})
  },
  //组织定义del
  definition_del(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/definition/del'), reqdata, {})
  },
  //组织定义导出Excel
  definition_export(param) {
    let reqdata = param ? param : {};
    return postExport(getUrl('organization/design/definition/export'), reqdata, {})
  },

  //组织结构列表
  structure_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/structure/list'), reqdata, {})
  },
  //组织定义insert
  structure_insert(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/structure/insert'), reqdata, {})
  },
  //组织定义update
  structure_update(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/structure/update'), reqdata, {})
  },
  //组织定义del
  structure_del(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/structure/del'), reqdata, {})
  },

  //部门价值链列表
  deptValue_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/deptValue/list'), reqdata, {})
  },
  //部门价值链insert
  deptValue_insert(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/deptValue/insert'), reqdata, {})
  },
  //部门价值链update
  deptValue_update(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/deptValue/update'), reqdata, {})
  },
  //部门价值链del
  deptValue_del(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/deptValue/del'), reqdata, {})
  },

  //部门职能设计列表
  deptFunctionDesign_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/deptFunctionDesign/list'), reqdata, {})
  },
  //部门职能设计insert
  deptFunctionDesign_insert(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/deptFunctionDesign/insert'), reqdata, {})
  },
  //部门职能设计update
  deptFunctionDesign_update(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/deptFunctionDesign/update'), reqdata, {})
  },
  //部门职能设计del
  deptFunctionDesign_del(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl('organization/design/deptFunctionDesign/del'), reqdata, {})
  },
}
