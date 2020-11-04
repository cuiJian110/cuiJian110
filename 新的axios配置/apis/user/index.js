import {
  get,
  post
} from '../utils/base'
import userCache from '@/common/js/userCache'

function _opts(isShowLoading) {
  var opt = {
    cache: {
      exp: 60
    }
  };
  if (isShowLoading) {
    return Object.assign(opt, {
      progress: true
    });
  };
};

// 获取验证码
export function getValidateCode(type, cellphone, codeImage) {
  const opts = _opts(true)
  const params = {
    type: type, //类型 1 注册 2登录 3修改密码 4绑定手机号
    cellphone: cellphone,
    loginCode: codeImage
  }
  return post('registerLogin/getValidateCode', params, {}, opts)
}

// 注册
export function register(cellphone, password, mobileCode) {
  const opts = _opts(true)
  const params = {
    cellphone: cellphone,
    password: password,
    mobileCode: mobileCode
  }
  return post('registerLogin/register', params, {}, opts)
}

// 手机号登录
export function userPhoneLogin(loginName, loginPass, loginCode) {
  const opts = _opts(true)
  const params = {
    loginName: loginName,
    loginPass: loginPass,
    loginCode: loginCode
  }
  return post('registerLogin/userLogin', params, {}, opts)
}

// 验证码登录
export function usermsmLogin(cellphone, mobileCode) {
  const opts = _opts(true)
  const params = {
    cellphone: cellphone,
    mobileCode: mobileCode
  }
  return post('registerLogin/userMobilLogin', params, {}, opts)
}

// // 手机号登录 教练
export function appCoachUserMobilLogin(cellphone, mobileCode) {
  const opts = _opts(true)
  const params = {
    cellphone: cellphone,
    mobileCode: mobileCode
  }
  return post('registerLogin/appCoachUserMobilLogin', params, {}, opts)
}

// 账号密码登录教练
export function appCoachUserLogin(loginName, loginPass, loginCode) {
  const opts = _opts(true)
  const params = {
    loginName: loginName,
    loginPass: loginPass,
    loginCode: loginCode
  }
  return post('registerLogin/appCoachUserLogin', params, {}, opts)
}

// // 授权
export function empowerCoach(token) {
  const opts = _opts(true)
  const params = {
    token: token
  }
  return post('registerLogin/empowerCoach', params, {}, opts)
}

// 验证码登录
export function updateMissPass(cellphone, password, mobileCode) {
  const opts = _opts(true)
  const params = {
    cellphone: cellphone,
    password: password,
    mobileCode: mobileCode
  }
  return post('registerLogin/updateMissPass', params, {}, opts)
}

//判断手机号是否存在
export function checkCellPhone(cellphone) {
  const opts = _opts(true)
  const params = {
    cellphone: cellphone
  }
  return post('registerLogin/checkCellPhone', params, {}, opts)
}

// 微信绑定手机号
export function bindCellphone(cellphone, mobileCode, password,unionid) {
  const opts = _opts(true)
  const params = {
    cellphone: cellphone,
    password: password,
    mobileCode: mobileCode,
    unionid:unionid
  }
  return post('registerLogin/bindCellphone', params, {}, opts)
}

//获取个人信息
export function queryUserAndHead() {
  const opts = _opts(true)
  const params = {
  }
  return post('personalData/queryUserAndHead', params, {}, opts)
}

//修改密码
export function updatePassword(primaryPassword,newPassword) {
  const opts = _opts(true)
  const params = {
    primaryPassword:primaryPassword,
    newPassword,newPassword
  }
  return post('personalData/updatePassword', params, {}, opts)
}

//意见反馈
export function userFeedback(userFeedbackContent) {
  const opts = _opts(true)
  const params = {
    userFeedbackContent:userFeedbackContent
  }
  return post('personalData/userFeedback', params, {}, opts)
}

//退出登录
export function userlogout() {
  const opts = _opts(true)
  const params = {
  }
  return post('registerLogin/logout', params, {}, opts)
}

//系统通知
export function findInformation(type,page) {
  const opts = _opts(true)
  const params = {
    type:type,
    page:page,
    limit:10
  }
  return post('information/findInformation', params, {}, opts)
}
//系统消息详情
export function notificationDetail(noticeId,tuisongId) {
  const opts = _opts(true)
  const params = {
    noticeId:noticeId,
    tuisongId:tuisongId
  }
  return post('person/selectNotice', params, {}, opts)
}
//个人消息详情
export function selectPersonMsg(tuimsgId,tuisongId) {
  const opts = _opts(true)
  const params = {
    tuimsgId:tuimsgId,
    tuisongId:tuisongId
  }
  return post('information/selectPersonMsg', params, {}, opts)
}
//基础数据
export function getBaseData() {
  const opts = _opts(true)
  const params = {

  }
  return post('personalData/queryUserInfo', params, {}, opts)
}

//行业二级
export function getIndustyData(industryId) {
  const opts = _opts(true)
  const params = {
    id:industryId
  }
  return post('personalData/selectHangye', params, {}, opts)
}

//城市二级
export function getCityData(parentId) {
  const opts = _opts(true)
  const params = {
    parentId:parentId
  }
  return post('certification/selectCitys', params, {}, opts)
}

//保存个人信息
export function editPersonalData(name,sex,hangyeId,yl1,yl6,yl8) {
  const opts = _opts(true)
  const params = {
    name:name,
    sex:sex,
    hangyeId:hangyeId,
    yl1:yl1,
    yl6:yl6,
    yl8:yl8
  }
  return post('personalData/editPersonalData', params, {}, opts)
}

//我的钱包
export function getMyAccount() {
  const opts = _opts(true)
  const params = {
  }
  return post('myAccount/toPay', params, {}, opts)
}

//支付
export function payMoney(goodsInfoId,type,payType,amount,id,audiototalId) {
  const opts = _opts(true)
  const params = {
    goodsInfoId:goodsInfoId,//商品id
    type:type,//	1、store商品购买 2、会员购买 4、在线学习购买 5、云币充值
    payType:payType,//1 支付宝 2微信
    amount:amount,//支付金额
    id:id,//会员id	
    audiototalId:audiototalId//在线学习id
  }
  return post('pay', params, {}, opts)
}
//支付
export function payMoney_coupon(params) {
  const opts = _opts(true)
  
  return post('pay', params, {}, opts)
}
//支付2
export function payMoney2(goodsInfoId,type,payType,cloudCurrencyId,id,audiototalId) {
  const opts = _opts(true)
  const params = {
    goodsInfoId:goodsInfoId,//商品id
    type:type,//	1、store商品购买 2、会员购买 4、在线学习购买 5、云币充值
    payType:payType,//1 支付宝 2微信
    cloudCurrencyId:cloudCurrencyId,//支付金额
    id:id,//会员id	
    audiototalId:audiototalId//在线学习id
  }
  
  return post('pay', params, {}, opts)
}
//支付2
export function payMoney2_coupon(params) {
  const opts = _opts(true)
  
  
  return post('pay', params, {}, opts)
}
//查询支付
export function queryWxPay(tradeNo) {
  const opts = _opts(true)
  const params = {
    tradeNo:tradeNo
  }
  return post('queryWxPay', params, {}, opts)
}

//查询购买会员
export function toBuyRank() {
  const opts = _opts(true)
  const params = {
  }
  return post('myAccount/toBuyRank', params, {}, opts)
}

//消费记录
export function toRecordsOfConsumption(page) {
  const opts = _opts(true)
  const params = {
    page:page,
    limit:10
  }
  return post('myAccount/consumption', params, {}, opts)
}
//查询发票信息
export function getInfoPublicPayment() {
  const opts = _opts(true)
  const params = {
  }
  return post('publicPayment/list', params, {}, opts)
}

//发票信息
export function publicPayment(invoiceTitle,dutyParagraph,invoiceAmount,addressPhone,bankAccount,remark,status,id) {
  const opts = _opts(true)
  const params = {
    invoiceTitle:invoiceTitle,//发票抬头
    dutyParagraph:dutyParagraph,//税号
    invoiceAmount:invoiceAmount,//	发票金额
    addressPhone:addressPhone,//地址，电话
    bankAccount:bankAccount,//开户行，账号
    remark:remark,//备注
    status:status,//0 未审核 1审核通过 2审核未通过
    id:id,//未通过修改时传
  }
  return post('publicPayment/add', params, {}, opts)
}

//查询我的课程信息
export function getMyCourse(page) {
  const opts = _opts(true)
  const params = {
    page:page,
    limit:6
  }
  return post('studyList/myCourse', params, {}, opts)
}
//支付
export function coursePay(payType,audiototalId) {
  const opts = _opts(true)
  const params = {
    type:4,//	1、store商品购买 2、会员购买 4、在线学习购买 5、云币充值
    payType:payType,//1 支付宝 2微信
    audiototalId:audiototalId//在线学习id
  }
  
  return post('pay', params, {}, opts)
}
//支付
export function coursePay_coupon(params) {
  const opts = _opts(true)
  return post('pay', params, {}, opts)
}
//支付
export function campPay(payType,goodsInfoId) {
  const opts = _opts(true)
  const params = {
    type:15,//	1、store商品购买 2、会员购买 4、在线学习购买 5、云币充值
    payType:payType,//1 支付宝 2微信
    goodsInfoId:goodsInfoId//在线学习id
  }
  
  return post('pay', params, {}, opts)
}
//支付
export function campPay_coupon(params) {
  const opts = _opts(true)
  
  return post('pay', params, {}, opts)
}
//查询云币列表
export function selectCloudCurrencyList() {
  const opts = _opts(true)
  const params = {
  }
  
  return post('selectCloudCurrencyList', params, {}, opts)
}