import { post, postjson, postform } from '../../../utils/base';
export default {
    //教练课程列表
    courseManagement_list(currentPage,type) {
        let reqdata = {
            currentPage,
            pageSize: 9
        }
        if(type) {
            reqdata.type = type
        }
        return postjson('/course/list', reqdata, {})
    },
    //排序获取所有课程
    courseManagement_all_list(param) {
        let reqdata = param ? param : {};
        return postjson('/course/selectCourseSortList', reqdata, {})
    },
    //排序获取所有课程
    courseManagement_course_UpdateSort (param) {
        let reqdata = param ? param : {};
        return postjson('/course/courseUpdateSort', reqdata, {})
    },
    //删除课程
    courseManagement_deleteTotal(param) {
        let reqdata = param ? param : {};
        return postjson('/course/deleteTotal', reqdata, {})
    },
    //更新课程状态
    courseUpdateCourseStatus(param) {
        let reqdata = param ? param : {};
        return postjson('/course/updateCourseStatus', reqdata, {})
    },
    //查询视频库列表
    courseManagement_selectVideoLibrary(param) {
        let reqdata = param ? param : {};
        return post('videoLibrary/selectVideoLibrary', reqdata, {})
    },
    //新增或修改视频库文件夹
    courseManagement_insertOrUpdateVideoLibrary(param) {
        let reqdata = param ? param : {};
        return post('videoLibrary/insertOrUpdateVideoLibrary', reqdata, {})
    },
    //删除文件夹或视频时判断文件夹下是否有视频，没有直接删除
    courseManagement_beforeDeleteVideoLibrary(param) {
        let reqdata = param ? param : {};
        return post('videoLibrary/beforeDeleteVideoLibrary', reqdata, {})
    },
    //删除视频库文件夹
    courseManagement_deleteVideoLibrary(param) {
        let reqdata = param ? param : {};
        return post('videoLibrary/deleteVideoLibrary', reqdata, {})
    },
    //获取上传凭证
    courseManagement_getAuth(param) {
        let reqdata = param ? param : {};
        return post('videoLibrary/getAuth', reqdata, {})
    },
    //订单列表查询
    courseManagement_selectForSeller(param) {
        let reqdata = param ? param : {};
        return post('videoLibrary/selectForSeller', reqdata, {})
    },
    //收益列表
    courseManagement_selectRecordForSeller(param) {
        let reqdata = param ? param : {};
        return post('videoLibrary/selectRecordForSeller', reqdata, {})
    },
    //查询用户当前余额
    courseManagement_selectMoney(param) {
        let reqdata = param ? param : {};
        return post('videoLibrary/selectMoney', reqdata, {})
    },
    //提现记录
    courseManagement_selectWechatWithdrawlApplicant(param) {
        let reqdata = param ? param : {};
        return post('videoLibrary/selectWechatWithdrawlApplicant', reqdata, {})
    },

    // 训练营部分 
    //教练训练营列表
    trainingCamp_list(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/list', reqdata, {})
    },
    //删除训练营
    trainingCamp_deleteTotal(param) {
        let reqdata = param ? param : {};
        return post('trainingCamp/deleteTotal', reqdata, {})
    },

}
