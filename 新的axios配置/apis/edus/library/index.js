import { post, postjson, postform } from '../../utils/base';
export default {
    //获取上传凭证
    video_getAuth(param) {
        let reqdata = param ? param : {};
        return postjson('/video/getAuth', reqdata, {})
    },
    // 获取视频列表 任务选择
    trainingCampLog_selectVideoLibrary(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectVideoLibrary', reqdata, {})
    },
    // 获取视频列表 资源库
    video_selectVideoLibraryList(param) {
        let reqdata = param ? param : {};
        return postform('/video/selectVideoLibraryList', reqdata, {})
    },
    //（视频）)新增或者修改文件夹
    video_insertOrUpdateVideoLibrary(param) {
        let reqdata = param ? param : {};
        return postjson('/video/insertOrUpdateVideoLibrary', reqdata, {})
    },
    // 查询需要排序的列表
    video_selectVideoLibrarySortList(param) {
        let reqdata = param ? param : {};
        return postform('/video/selectVideoLibrarySortList', reqdata, {})
    },
    // 资源排序
    video_videoLibrarySort(param) {
        let reqdata = param ? param : {};
        return postjson('/video/videoLibrarySort', reqdata, {})
    },
    // 查询需要排序的课程课件列表
    homeworkDocument_selectSortList(param) {
        let reqdata = param ? param : {};
        return postjson('/homeworkDocument/selectSortList', reqdata, {})
    },
    // 课程资源排序
    homeworkDocument_updateSort(param) {
        let reqdata = param ? param : {};
        return postjson('/homeworkDocument/updateSort', reqdata, {})
    },


    // 模板
    //作业模板列表
    homeworkDocument_selectHomeworkTemplate(param) {
        let reqdata = param ? param : {};
        return postjson('/homeworkDocument/selectHomeworkTemplate', reqdata, {})
    },
    //作业模板列表
    homeworkDocument_selectHomeworkTemplate_page(param) {
        let reqdata = param ? param : {};
        return postjson('/homeworkDocument/selectHomeworkTemplatePage', reqdata, {})
    },

    //（模板资源）新增或者修改
    homeworkDocument_createHomeworkDocument(param) {
        let reqdata = param ? param : {};
        return postjson('/homeworkDocument/createHomeworkDocument', reqdata, {})
    },
    //作业模板上传
    homeworkDocument_uploadHomeworkDocument(param) {
        let reqdata = param ? param : {};
        return postform('/homeworkDocument/uploadHomeworkDocument', reqdata, {})
    },


    //删除资源 音频视频
    video_deleteVideoLibrary(param) {
        let reqdata = param ? param : {};
        return postjson('/video/deleteVideoLibrary', reqdata, {})
    },
    //删除资源 模板文件
    homeworkDocument_deleteHomeworkDocument(param) {
        let reqdata = param ? param : {};
        return postjson('/homeworkDocument/deleteHomeworkDocument', reqdata, {})
    },
}
