import { post, postjson, postform } from '../../utils/base';
export default {
    //优惠券列表
    coupon_selectCouponList(param) {
        let reqdata = param ? param : {};
        return postjson('/coupon/selectCouponList', reqdata, {})
    },
    //选择商品
    coupon_selectGoodsList(param) {
        let reqdata = param ? param : {};
        return postjson('/coupon/selectGoodsList', reqdata, {})
    },
    //新增或者修改优惠券
    coupon_addCoupon(param) {
        let reqdata = param ? param : {};
        return postjson('/coupon/addCoupon', reqdata, {})
    },
    //领取记录 报表数据
    coupon_selectRecordList(param) {
        let reqdata = param ? param : {};
        return postjson('/coupon/selectRecordList', reqdata, {})
    },
    //生成二维码
    coupon_createUrl(param) {
        let reqdata = param ? param : {};
        return postjson('/coupon/createUrl', reqdata, {})
    },
    //更新优惠券状态
    coupon_updateStatus(param) {
        let reqdata = param ? param : {};
        return postjson('/coupon/updateStatus', reqdata, {})
    },
    //更新优惠券状态
    coupon_selectById(param) {
        let reqdata = param ? param : {};
        return postjson('/coupon/selectById', reqdata, {})
    },
    // 活动列表
    activity_selectActivityList(param) {
        let reqdata = param ? param : {};
        return postjson('/activity/selectActivityList', reqdata, {})
    },
    // 更新活动状态
    activity_updateState(param) {
        let reqdata = param ? param : {};
        return postjson('/activity/updateState', reqdata, {})
    },
    // 优惠券选择
    activity_selectCouponList(param) {
        let reqdata = param ? param : {};
        return postjson('/activity/selectCouponList', reqdata, {})
    },
    // 新增活动
    activity_addActivity(param) {
        let reqdata = param ? param : {};
        return postform('/activity/addActivity', reqdata, {})
    },
    // 删除活动
    activity_deleteActivity(param) {
        let reqdata = param ? param : {};
        return postjson('/activity/deleteActivity', reqdata, {})
    },
    //生成二维码
    activity_createUrl(param) {
        let reqdata = param ? param : {};
        return postjson('/activity/createUrl', reqdata, {})
    },
    // 活动记录
    activity_selectActivityRecordList(param) {
        let reqdata = param ? param : {};
        return postjson('/activity/selectActivityRecordList', reqdata, {})
    },
    // 更新 记录
    activity_updateActivityRecord(param) {
        let reqdata = param ? param : {};
        return postjson('/activity/updateActivityRecord', reqdata, {})
    },
    // 删除 记录
    activity_deleteRecord(param) {
        let reqdata = param ? param : {};
        return postjson('/activity/deleteRecord', reqdata, {})
    },
}