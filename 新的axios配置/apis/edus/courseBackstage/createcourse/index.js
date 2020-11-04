import { post, postjson, postform } from '../../../utils/base';
export default {
    // 上传课程图片
    createCourse_upLoadPicture(param) {
        let reqdata = param ? param : {};
        return postform('/course/insertPicture', reqdata, {})
    },
    // 创建修改课程
    createCourse_insertOrUpdateCourse(param) {
        let reqdata = param ? param : {};
        return postjson('/course/insertOrUpdateCourse', reqdata, {})
    },
    // 新增或者修改章节
    createCourse_insertDetailLog(param) {
        let reqdata = param ? param : {};
        return postform('/course/insertDetailLog', reqdata, {})
    },
    // 删除章节
    createCourse_deleteDetailLog(param) {
        let reqdata = param ? param : {};
        return postjson('/course/deleteDetailLog', reqdata, {})
    },
    // 上传课件
    createCourse_insertOrUpdateStudyMaterial(param) {
        let reqdata = param ? param : {};
        return postform('/course/insertOrUpdateStudyMaterial', reqdata, {})
    },
    // 上传课件url
    createCourse_insertOrUpdateStudyMaterial_url(param) {
        let reqdata = param ? param : {};
        return postjson('/course/insertOrUpdateStudyMaterial2', reqdata, {})
    },
    // 删除课件
    createCourse_deleteStudyMaterial(param) {
        let reqdata = param ? param : {};
        return postjson('/course/deleteStudyMaterial', reqdata, {})
    },
    // 获取课程名称和封面
    editCourse_selectAudiototal(param) {
        let reqdata = param ? param : {};
        return postform('/course/selectAudiototal', reqdata, {})
    },
    // 获取课程详情
    editCourse_selectByKey(param) {
        let reqdata = param ? param : {};
        return postjson('/course/selectByKey', reqdata, {})
    },
    // 删除图片
    editCourse_deleteImg(param) {
        let reqdata = param ? param : {};
        return postjson('/course/deleteImg', reqdata, {})
    },
    //查询全部章节
    editCourse_selectAll(param) {
        let reqdata = param ? param : {};
        return postjson('/course/selectAll', reqdata, {})
    },
    // 排序
    editCourse_updateAll(param) {
        let reqdata = param ? param : {};
        return postjson('/course/updateAll', reqdata, {})
    },
    // 批量创建课程章节
    createCourse_piliang(param) {
        let reqdata = param ? param : {};
        return postjson('/course/createCourseDetail', reqdata, {})
    },
    // 提交审核
    editCourse_submit(param) {
        let reqdata = param ? param : {};
        return postjson('/course/submit', reqdata, {})
    },
    // 发布
    editCourse_release(param) {
        let reqdata = param ? param : {};
        return postjson('/course/release', reqdata, {})
    },
    //获取上传凭证（轮播图视频）
    courseManagement_getUploadAuth(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/getUploadAuth', reqdata, {})
    },
    //获取上传凭证
    courseManagement_getAuth(param) {
        let reqdata = param ? param : {};
        return post('videoLibrary/getAuth', reqdata, {})
    },
    //新增多张图片 单张
    courseManagement_insertPicture(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/insertPicture', reqdata, {})
    },
    //课程创建或修改接口
    courseManagement_insertOrUpdateCourse(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/insertOrUpdateCourse', reqdata, {})
    },
    //新增章节或小节
    courseManagement_insertDetailLog(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/insertDetailLog', reqdata, {})
    },
    //查询全部章节
    courseManagement_selectAll(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/selectAll', reqdata, {})
    },
    //删除章节
    courseManagement_deleteDetailLog(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/deleteDetailLog', reqdata, {})
    },
    //删除文件
    courseManagement_deleteStudyMaterial(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/deleteStudyMaterial', reqdata, {})
    },
    // 获取课程详情
    courseManagement_selectByKey(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/selectByKey', reqdata, {})
    },
    // 删除图片
    courseManagement_deleteImg(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/deleteImg', reqdata, {})
    },
    // 查询全部章节
    courseManagement_selectAll(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/selectAll', reqdata, {})
    },
    // 获取课程名称和封面
    courseManagement_selectAudiototal(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/selectAudiototal', reqdata, {})
    },
    // 更新全部章节
    courseManagement_updateAll(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/updateAll', reqdata, {})
    },
    // 提交审核
    courseManagement_submit(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/submit', reqdata, {})
    },
    // 发布
    courseManagement_release(param) {
        let reqdata = param ? param : {};
        return post('courseManagement/release', reqdata, {})
    },
}
