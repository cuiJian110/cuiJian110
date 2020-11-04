import { postjson } from '../../utils/base';
export default {
    //统计接口
    order_coeStatistics(param) {
        let reqdata = param ? param : {};
        return postjson('/order/coeStatistics', reqdata, {})
    },
}