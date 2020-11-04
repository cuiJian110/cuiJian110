import { postjson } from '../../utils/base';
export default {
    //获取上传凭证
    order_selectOrderByOrganizationId(param) {
        let reqdata = param ? param : {};
        return postjson('/order/selectOrderByOrganizationId', reqdata, {})
    },
    //提现列表
    order_selectWithdrawlList(param) {
        let reqdata = param ? param : {};
        return postjson('/order/selectWithdrawlList', reqdata, {})
    },
    //审核提现
    order_updateStatus(param) {
        let reqdata = param ? param : {};
        return postjson('/order/updateStatus', reqdata, {})
    },

}