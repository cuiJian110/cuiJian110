import { post, postForm, postJson } from '../base';
function getUrl_crm(url) {
    return "ehr-crm/" + url;
}
function getUrl_admin(url) {
  return "ehr-admin/" + url;
}
export default {
  //部门树（所属公司）
  dept_officeDeptTree(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/role/dept/officeDeptTree'), reqdata, {})
  },
  //新增部门
  dept_insert(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/role/dept/insert'), reqdata, {})
  },
  //删除部门
  dept_del(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/role/dept/del'), reqdata, {})
  },
  //修改部门
  dept_update(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/role/dept/update'), reqdata, {})
  },
  //公司可分配权限树
  branchOffice_getCurrentOfficeModuleTree(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_admin('branchOffice/getCurrentOfficeModuleTree'), reqdata, {})
  },
  //角色列表
  role_page(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/role/page'), reqdata, {})
  },
  //查看部门信息
  dept_id(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/role/dept/id'), reqdata, {})
  },
  //新增角色
  role_insert(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/role/insert'), reqdata, {})
  },
  //修改角色
  role_update(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/role/update'), reqdata, {})
  },
  //删除角色
  role_del(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/role/del'), reqdata, {})
  },
  //员工列表
  staff_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/staff/list'), reqdata, {})
  },
  //公司角色列表
  role_list(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/role/list'), reqdata, {})
  },
  //添加员工
  staff_insert(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/staff/insert'), reqdata, {})
  },
  //编辑员工
  staff_update(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/staff/update'), reqdata, {})
  },
  //删除员工
  staff_del(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/staff/del'), reqdata, {})
  },
  // 模板下载
  staff_template(param) {
    let reqdata = param ? param : {};
    return postJson(getUrl_crm('people/staff/template'), reqdata, {})
  },
  // +批量导入
  staff_batchInsert(param) {
    let reqdata = param ? param : {};
    return postForm(getUrl_crm('people/staff/batchInsert'), reqdata, {})
  },
}