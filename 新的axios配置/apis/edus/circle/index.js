import { post, postjson, postform } from '../../utils/base';
export default {
    //训练营标签列表
    selectCircleTypeList(param) {
        let reqdata = param ? param : {};
        return postjson('/interest/selectList', reqdata, {})
    },
    //新建或者修改标签
    circleType_insertOrUpdate(param) {
        let reqdata = param ? param : {};
        return postjson('/interest/insertOrUpdate', reqdata, {})
    },
    //删除训练营标签
    circleType_deleteById(param) {
        let reqdata = param ? param : {};
        return postjson('/interest/delete', reqdata, {})
    }
}