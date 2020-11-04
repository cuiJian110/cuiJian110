import { post } from '../../utils/base2';
export default {
    //删除训练营
    trainingCamp_deleteTotal(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/deleteTotal', reqdata, {})
    },
    //新增或修改训练营主信息
    trainingCamp_insertOrUpdateCourse(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/insertOrUpdateCourse', reqdata, {})
    },

    //发布
    trainingCamp_release(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/release', reqdata, {})
    },
    //查询全部课时
    trainingCamp_selectAll(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/selectAll', reqdata, {})
    },
    //更新全部课时
    trainingCamp_updateAll(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/updateAll', reqdata, {})
    },
    //提交审核
    trainingCamp_submit(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/submit', reqdata, {})
    },
    //删除课时
    trainingCamp_deleteDetailLog(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/deleteDetailLog', reqdata, {})
    },
    //新增训练营课时
    trainingCamp_insertDetailLog(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/insertDetailLog', reqdata, {})
    },
    //删除作业模板
    trainingCamp_deleteTemplate(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/deleteTemplate', reqdata, {})
    },
    //新增或修改作业模板
    trainingCamp_insertOrUpdateTemplate(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/insertOrUpdateTemplate', reqdata, {})
    },
    //删除图片
    trainingCamp_deleteImg(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/deleteImg', reqdata, {})
    },
    //单独查询主信息
    trainingCamp_selectTrainingCampLog(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/selectTrainingCampLog', reqdata, {})
    },
    //查询训练营详主信息，图片
    trainingCamp_selectCourseManagement(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/selectCourseManagement', reqdata, {})
    },
    //获取上传凭证 （训练营课程视频）
    trainingCamp_getAuth(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/getAuth', reqdata, {})
    },
    //获取上传凭证 （轮播图视频）
    trainingCamp_getUploadAuth(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/getUploadAuth', reqdata, {})
    },
    //更新图片
    trainingCamp_insertPicture(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/insertPicture', reqdata, {})
    },
    //新增单张图片
    trainingCamp_insertPicture(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/insertPicture', reqdata, {})
    },
    //新增多张图片
    trainingCamp_insertPictures(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/insertPictures', reqdata, {})
    },
    //教练训练营列表
    trainingCamp_list(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/list', reqdata, {})
    },



    //作业管理：训练营列表
    trainingCamp_selectCampList(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/selectCampList', reqdata, {})
    },
    //作业管理：训练营课时作业列表
    trainingCamp_selectHomework(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/selectHomework', reqdata, {})
    },    //作业管理：训练营课时作业列表：更新作业接口
    trainingCamp_updateHomeWork(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/updateHomeWork', reqdata, {})
    },    //作业管理： 训练营课时作业列表：学员列表
    trainingCamp_selectDetailStudentHomework(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/selectDetailStudentHomework', reqdata, {})
    },    //作业管理：学员列表
    trainingCamp_selectStudentHomework(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/selectStudentHomework', reqdata, {})
    },    //作业管理：学员：详情
    trainingCamp_selectStudentHomeworkDetail(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/selectStudentHomeworkDetail', reqdata, {})
    },
    //一键推送
    trainingCamp_sendMessage(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/sendMessage', reqdata, {})
    },
    //我的训练营：列表
    studyList_myTraining(param) {
        let reqdata = param ? param : {};
        return post('studyList/myTraining', reqdata, {})
    },
    //我的训练营：作业列表
    studyList_selectWithHomework(param) {
        let reqdata = param ? param : {};
        return post('studyList/selectWithHomework', reqdata, {})
    },
    //我的训练营：新增或修改作业
    studyList_selectWithHomework(param) {
        let reqdata = param ? param : {};
        return post('studyList/selectWithHomework', reqdata, {})
    },
}
