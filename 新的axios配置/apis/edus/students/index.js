import { post, postjson, postform } from '../../utils/base';
export default {
    //训练营学员作业提交统计
    student_selectHomeworkDetail(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectHomeworkDetail', reqdata, {})
    },
    //训练营学员信息
    student_selectCampStudentList(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectCampStudentList', reqdata, {})
    },
    //证书学员列表
    student_selectCertificateStudentList(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectCertificateStudentList', reqdata, {})
    },
    //学员使用券列表
    student_selectCoupInfoList(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectCoupInfoList', reqdata, {})
    },
    //（机构）训练营学员
    student_selectStudentInfoList(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectStudentInfoList', reqdata, {})
    },
    //证书训练营列表
    student_selectEndCampList(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectEndCampList', reqdata, {})
    },
    //训练营标签列表
    selectCampTypeList(param) {
        let reqdata = param ? param : {};
        return postjson('/campType/selectCampTypeList', reqdata, {})
    },
    // 创建训练营选择模板列表
    trainingCampLog_selectCreateTemplateList(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectCreateTemplateList', reqdata, {})
    },
    //添加学员
    student_addStudent(param) {
        let reqdata = param ? param : {};
        return postjson('/student/addStudent', reqdata, {})
    },
    //训练营学员作业提交统计
    student_selectHomeworkDetail(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectHomeworkDetail', reqdata, {})
    },
    //获取基础数据
    student_basedata(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectAllList', reqdata, {})
    },
    //获取学员信息
    student_message(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectStudentInfo', reqdata, {})
    },
}