import { post, postjson, postform } from '../../utils/base';
export default {
    //训练营标签列表
    selectCampTypeList(param) {
        let reqdata = param ? param : {};
        return postjson('/campType/selectCampTypeList', reqdata, {})
    },
    //教练列表
    coach_queryList(param) {
        let reqdata = param ? param : {};
        return post('/coach/queryList', reqdata, {})
    },
    //修改教练信息
    coach_update(param) {
        let reqdata = param ? param : {};
        return post('/coach/update', reqdata, {})
    },
    //新增教练
    coach_insert(param) {
        let reqdata = param ? param : {};
        return post('/coach/insert', reqdata, {})
    },
    //教练删除
    coach_delete(param) {
        let reqdata = param ? param : {};
        return post('/coach/delete', reqdata, {})
    },
    //教练日程
    coach_queryTrainingList(param) {
        let reqdata = param ? param : {};
        return post('/coach/queryTrainingList', reqdata, {})
    },
    //教练训练营信息
    coach_queryTrainingList(param) {
        let reqdata = param ? param : {};
        return post('/coach/queryTrainingList', reqdata, {})
    },
}