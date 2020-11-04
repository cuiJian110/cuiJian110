import { post, postForm, postJson } from '../base';
function getUrl(url) {
    return "ehr-admin/" + url;
}
export default {
    //退出登录
    role_list(param) {
        let reqdata = param ? param : {};
        return postJson(getUrl("role/list"), reqdata, {})
    },
    //我的子系统
    module_mySubsystem(param) {
        let reqdata = param ? param : {};
        return postForm(getUrl("module/mySubsystem"), reqdata, {})
    },
    //左侧菜单栏
    menu_leftMenuBar(param) {
        let reqdata = param ? param : {};
        return postJson(getUrl("menu/leftMenuBar"), reqdata, {})
    },
}