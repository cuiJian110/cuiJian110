import { post,postjson } from '../../utils/base';
export default {
    //登录
    userPhoneLogin(param) {
        let reqdata = param ? param : {};
        return post('/registerLogin/userLogin', reqdata, {})
    },

    //新增修改角色权限
    role_saveMenu(param) {
        let reqdata = param ? param : {};
        return postjson('/role/saveMenu', reqdata, {})
    },
    //查询角色权限和总菜单对应关系
    role_selectRolePermission(param) {
        let reqdata = param ? param : {};
        return post('/role/selectRolePermission', reqdata, {})
    },
    //删除角色
    role_delete(param) {
        let reqdata = param ? param : {};
        return post('/role/delete', reqdata, {})
    },
    //修改角色
    role_update(param) {
        let reqdata = param ? param : {};
        return post('/role/update', reqdata, {})
    },
    //新增角色
    role_insert(param) {
        let reqdata = param ? param : {};
        return post('/role/insert', reqdata, {})
    },
    //查看角色列表
    role_selectList(param) {
        let reqdata = param ? param : {};
        return post('/role/selectList', reqdata, {})
    },
    //删除成员
    eduUser_delete(param) {
        let reqdata = param ? param : {};
        return post('/eduUser/delete', reqdata, {})
    },
    //修改成员
    eduUser_update(param) {
        let reqdata = param ? param : {};
        return post('/eduUser/update', reqdata, {})
    },
    //新增成员
    eduUser_insert(param) {
        let reqdata = param ? param : {};
        return post('/eduUser/insert', reqdata, {})
    },
    //查看成员列表
    eduUser_selectList(param) {
        let reqdata = param ? param : {};
        return post('/eduUser/selectList', reqdata, {})
    },
}