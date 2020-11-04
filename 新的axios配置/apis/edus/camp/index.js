import { post, postjson, postform } from '../../utils/base';
export default {
    //训练营标签列表
    selectCampTypeList(param) {
        let reqdata = param ? param : {};
        return postjson('/campType/selectCampTypeList', reqdata, {})
    },
    //训练营标签列表2 商品用的
    selectCampTypeList2(param) {
        let reqdata = param ? param : {};
        return postjson('/campType/selectCampTypeList2', reqdata, {})
    },
    //训练营标签列表3 课程用的
    selectCampTypeList3(param) {
        let reqdata = param ? param : {};
        return postjson('/campType/selectCampTypeList3', reqdata, {})
    },

    //新建或者修改标签
    campType_insertOrUpdate(param) {
        let reqdata = param ? param : {};
        return postjson('/campType/insertOrUpdate', reqdata, {})
    },
     //新建或者修改标签
     
     campClass_nameChange(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/updateTrainingCampName', reqdata, {})
    },
    //删除训练营标签
    campType_deleteById(param) {
        let reqdata = param ? param : {};
        return postjson('/campType/deleteById', reqdata, {})
    },
    // 创建训练营选择模板列表
    trainingCampLog_selectCreateTemplateList(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectCreateTemplateList', reqdata, {})
    },
        // 训练营上下架
        trainingCampLog_updateCampStatus2(param) {
            let reqdata = param ? param : {};
            return postjson('/trainingCampLog/updateCampStatus2', reqdata, {})
        },

    //训练营图片上传
    trainingCampLog_insertPictures(param) {
        let reqdata = param ? param : {};
        return postform('/trainingCampLog/insertPictures', reqdata, {})
    },
    // 训练营删除图片
    trainingCampLog_deleteImg(param) {
        let reqdata = param ? param : {};
        return post('/trainingCampLog/deleteImg', reqdata, {})
    },

    // 新建或修改训练营
    trainingCampLog_createOrUpdateTrainingCamp(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/createOrUpdateTrainingCamp', reqdata, {})
    },
    // 查询训练营详情
    trainingCampLog_selectCampManagement(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectCampManagement', reqdata, {})
    },
    // 查询训练营的任务列表
    trainingCampLog_selectCampTaskList(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectCampTaskList', reqdata, {})
    },
    // 创建或修改训练营任务
    trainingCampLog_insertOrUpdateCampTask(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/insertOrUpdateCampTask', reqdata, {})
    },
    // 新增或修改任务中视频
    trainingCampLog_insertTasksDetail(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/insertTasksDetail', reqdata, {})
    },
    // 获取视频列表 任务选择
    trainingCampLog_selectVideoLibrary(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectVideoLibrary', reqdata, {})
    },
    // 获取视频列表 资源库
    video_selectVideoLibraryList(param) {
        let reqdata = param ? param : {};
        return postjson('/video/selectVideoLibraryList', reqdata, {})
    },
    // 新增或者修改任务中作业
    trainingCampLog_insertcoursewareList(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/insertCampCourseWare', reqdata, {})
    },
    // 作业模板列表
    homeworkDocument_selectHomeworkTemplate(param) {
        let reqdata = param ? param : {};
        return postjson('/homeworkDocument/selectHomeworkTemplate', reqdata, {})
    },

    // 新增或者修改任务中作业
    trainingCampLog_insertTasksHomework(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/insertTasksHomework', reqdata, {})
    },
    // 删除任务中作业
    trainingCampLog_deleteCampHomeworkInfo(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/deleteCampHomeworkInfo', reqdata, {})
    },
    // 删除训练营中任务
    trainingCampLog_deleteCampTask(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/deleteCampTask', reqdata, {})
    },

    // 训练营模板列表
    trainingCampLog_selectCampTemplateList(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectCampTemplateList', reqdata, {})
    },
    // 训练营排序数据
    trainingCampLog_selectSortList(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectSortList', reqdata, {})
    },
    //排序所有训练营商品
    trainingCampLog_updateSort (param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/updateSort', reqdata, {})
    },
    // 训练营管理（发布版本）
    trainingCampLog_selectCampList(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectCampList', reqdata, {})
    },
    // 训练营计划列表
    forecast_selectCampPlanList(param) {
        let reqdata = param ? param : {};
        return postjson('/forecast/selectCampPlanList', reqdata, {})
    },
    // 教练列表
    forecast_selectCoachList(param) {
        let reqdata = param ? param : {};
        return postjson('/forecast/selectCoachList', reqdata, {})
    },
    // 更新训练营计划
    trainingCampLog_updateCampClassInfo(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/updatePlanCamp', reqdata, {})
    },
    // 分享连接
    trainingCampLog_selectShareUrl(param) {
        let reqdata = param ? param : {};
        return postjson('/forecast/selectShareUrl', reqdata, {})
    },
    // 提醒教练
    forecast_campPlanPush(param) {
        let reqdata = param ? param : {};
        return postjson('/forecast/campPlanPush', reqdata, {})
    },
    // 报名学员列表
    forecast_selectForecastList(param) {
        let reqdata = param ? param : {};
        return postjson('/forecast/selectForecastList', reqdata, {})
    },
    // add报名学员列表
    forecast_add(param) {
        let reqdata = param ? param : {};
        return postjson('/forecast/add', reqdata, {})
    },
    // 删除预报名学员
    forecast_delete(param) {
        let reqdata = param ? param : {};
        return postjson('/forecast/delete', reqdata, {})
    },
    // 更新支付状态
    forecast_updatePayType(param) {
        let reqdata = param ? param : {};
        return postjson('/forecast/updatePayType', reqdata, {})
    },
    // 训练营(课程)查询列表（log）
    trainingCampLog_selectCampLogList(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectCampLogList', reqdata, {})
    },
    // 创建训练营选择模板列表
    trainingCampLog_selectCreateTemplateList(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectCreateTemplateList', reqdata, {})
    },
    // 复制训练营
    trainingCampLog_insertCopyCampLog(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/insertCopyCampLog', reqdata, {})
    },

    // 删除训练营log表数据
    trainingCampLog_deleteCampLog(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/deleteCampLog', reqdata, {})
    },
    // 训练营预览接口
    trainingCampLog_selectCampInfo(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectCampInfo', reqdata, {})
    },
    // 训练营选择教练接口
    trainingCampLog_selectCoachList(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/selectCoachList', reqdata, {})
    },
    // 证书训练营列表
    student_selectEndCampList(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectEndCampList', reqdata, {})
    },
    // 证书学员列表
    student_selectCertificateStudentList(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectCertificateStudentList', reqdata, {})
    },

    // 查询学员列表
    student_selectCampStudentList(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectCampStudentList', reqdata, {})
    },
    //删除训练营内的学员
    student_deleteStudent(param) {
        let reqdata = param ? param : {};
        return postjson('/student/deleteStudent', reqdata, {})
    },
    //添加学员
    student_addStudent(param) {
        let reqdata = param ? param : {};
        return postjson('/student/addStudent', reqdata, {})
    },
    //编辑学员
    student_editStudent(param) {
        let reqdata = param ? param : {};
        return postjson('/student/updateCampStudent', reqdata, {})
    },
    //心得--查询
    experience_selectExperienceByCampId(param) {
        let reqdata = param ? param : {};
        return postjson('/experience/selectExperienceByCampId', reqdata, {})
    },
    //心得--创建和修改
    experience_insertExperienceByCampId(param) {
        let reqdata = param ? param : {};
        return postjson('/experience/insertExperienceByCampId', reqdata, {})
    },


    // 提交审核
    trainingCampLog_updateStatus(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/commitStatus', reqdata, {})
    },
    // 查询训练营审核发布权限
    eduUser_selectToExamine(param) {
        let reqdata = param ? param : {};
        return postjson('/eduUser/selectToExamine', reqdata, {})
    },
    // 训练营审核接口
    trainingCampLog_updateCampStatus(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/updateCampStatus', reqdata, {})
    },
    // 发布测试
    notAuth_testReleseCamp(param) {
        let reqdata = param ? param : {};
        return postjson('/notAuth/testReleseCamp', reqdata, {})
    },
    // 发布
    trainingCampLog_eduReless(param) {
        let reqdata = param ? param : {};
        return postjson('/trainingCampLog/eduReless', reqdata, {})
    },

    // 获取证书列表
    student_selectCertificationList(param) {
        let reqdata = param ? param : {};
        return postjson('/student/selectCertificationList', reqdata, {})
    },
    // 上传证书
    student_addCertificate(param) {
        let reqdata = param ? param : {};
        return postjson('/student/addCertificate', reqdata, {})
    },
    // 训练营查询
    search_camp(param) {
        let reqdata = param ? param : {};
        return postjson('/campComment/selectCamp', reqdata, {})
    },
    // 学员评价列表查询
    student_comment_list(param) {
        let reqdata = param ? param : {};
        return postjson('/campComment/list', reqdata, {})
    },
    // 学员评价类型修改
    student_comment_updateType(param) {
        let reqdata = param ? param : {};
        return postjson('/campComment/updateType', reqdata, {})
    },
    // 学员评价类型新增
    student_comment_insert(param) {
        let reqdata = param ? param : {};
        return postform('/campComment/insert', reqdata, {})
    },
    // 优秀作业列表查询
    student_goodJod_list(param) {
        let reqdata = param ? param : {};
        return postjson('/campHomeworkLog/list', reqdata, {})
    },
    // 优秀作业类型修改
    student_goodJob_updateType(param) {
        let reqdata = param ? param : {};
        return postjson('/campHomeworkLog/updateType', reqdata, {})
    },
    // 训练营下任务
    camp_task_list(param) {
        let reqdata = param ? param : {};
        return postjson('/campHomeworkLog/selectTaskList', reqdata, {})
    },
    // 任务下作业
    task_homework_list(param) {
        let reqdata = param ? param : {};
        return postjson('/campHomeworkLog/selectTaskHomeworkList', reqdata, {})
    },
    // 优秀作业新增
    student_goodJob_insert(param) {
        let reqdata = param ? param : {};
        return postform('/campHomeworkLog/insert', reqdata, {})
    },
    // 精彩分享列表查询
    student_share_list(param) {
        let reqdata = param ? param : {};
        return postjson('/campWonderfulShare/selectShareList', reqdata, {})
    },
    // 播放列表——全部
    student_share_video_list(param) {
        let reqdata = param ? param : {};
        return postjson('/campWonderfulShare/selectShareVideoList', reqdata, {})
    },
    // 新建或者更新精彩分享
    student_share_insert(param) {
        let reqdata = param ? param : {};
        return postjson('/campWonderfulShare/update', reqdata, {})
    },
    // 训练营统计查询查询 进入页面最上面一排
    camp_statistics_check(param) {
        let reqdata = param ? param : {};
        return postjson('/campStatistic/selectCampStatistic', reqdata, {})
    },
    // 训练营学员统计查询 进入页面表格
    camp_student_statistics_list(param) {
        let reqdata = param ? param : {};
        return postjson('/campStatistic/selectStudentStatisticList', reqdata, {})
    },
    // 训练营学员作业统计查询 点击单个学员查询
    camp_student_statistics_info(param) {
        let reqdata = param ? param : {};
        return postjson('/campStatistic/selectStudentHomeworkStatistic', reqdata, {})
    },
    // 导出表
    export_and_user(param) {
        let reqdata = param ? param : {};
        return postjson('/campStatistic/exportAndUser', reqdata, {})
    },
     // 标杆作业列表查询
     student_poleJod_list(param) {
        let reqdata = param ? param : {};
        return postjson('/benchmarking/selectList', reqdata, {})
    },
    // 标杆作业类型修改
    student_poleJob_updateType(param) {
        let reqdata = param ? param : {};
        return postjson('/benchmarking/updateType', reqdata, {})
    },
    // 标杆作业新增
    student_poleJob_insert(param) {
        let reqdata = param ? param : {};
        return postform('/benchmarking/insert', reqdata, {})
    },
}