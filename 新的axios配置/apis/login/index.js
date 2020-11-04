import { post, postForm, postJson } from '../base';
function getAuthUrl(url) {
    return "ehr-auth/" + url;
}
function getAdminUrl(url) {
    return "ehr-admin/" + url;
}
export default {
    // 验证码登录获取验证码
    user_sendCode(param) {
        let reqdata = param ? param : {};
        return postJson(getAdminUrl('user/sendCode'), reqdata, {})
    },
    //登录
    userPhoneLogin(param) {
        let reqdata = param ? param : {};
        return postJson(getAuthUrl('auth/getAppToken'), reqdata, {})
    },
    //APP忘记密码
    user_updateMissPass(param) {
        let reqdata = param ? param : {};
        return postJson(getAdminUrl('user/updateMissPass'), reqdata, {})
    },
    //退出登录
    login_logout(param) {
        let reqdata = param ? param : {};
        return postJson('ehr-admin/user/getUserById', reqdata, {})
    },
    //菜单列表
    login_listAll(param) {
        let reqdata = param ? param : {};
        return postJson('/login/listAll', reqdata, {})
    },
    // 消息处理
    // 消息列表
    eduUser_selectInformation(param) {
        let reqdata = param ? param : {};
        return postJson('/eduUser/selectInformation', reqdata, {})
    },
    //修改消息 已查看
    eduUser_selectUpdateInformation(param) {
        let reqdata = param ? param : {};
        return postJson('/eduUser/selectUpdateInformation', reqdata, {})
    },
    //查询未查看消息条数
    eduUser_selectInfoCount(param) {
        let reqdata = param ? param : {};
        return postJson('/eduUser/selectInfoCount', reqdata, {})
    },
}