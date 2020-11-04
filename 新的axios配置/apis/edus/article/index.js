import { post, postjson, postform } from '../../utils/base';
export default {
    //分页查询文库列表
    library_selectList(param) {
        let reqdata = param ? param : {};
        return postjson('/library/selectList', reqdata, {})
    },
    //新增、修改文件或文件夹
    library_insertOrUpdate(param) {
        let reqdata = param ? param : {};
        return postform('/library/insertOrUpdate', reqdata, {})
    },
    //删除文件或文件夹
    library_delete(param) {
        let reqdata = param ? param : {};
        return postjson('/library/delete', reqdata, {})
    },
    //分页查询优秀作业列表
    library_selectHomeworkList(param) {
        let reqdata = param ? param : {};
        return postjson('/library/selectHomeworkList', reqdata, {})
    },
    //修改优秀作业别名
    library_updateHomeworkAliasName(param) {
        let reqdata = param ? param : {};
        return postjson('/library/updateHomeworkAliasName', reqdata, {})
    },
}