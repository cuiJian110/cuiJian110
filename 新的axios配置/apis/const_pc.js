// export const AllDebug = true;

// export const testUrl = 'http://192.168.0.115'//测试环境
// export const imgAndVideoUrl = 'http://192.168.0.119:8080/'//测试环境
// export const redirectUrl = "http://192.168.0.119:8080/"//url
// export const socketUrl = "ws://192.168.0.119:8080/websocket/ws/"
// export const baseLink = 'http://192.168.0.115'//测试环境
// export const lineUrl = 'http://192.168.0.119:8080'//线上环境


export const AllDebug = true;
export const imgAndVideoUrl = 'https://test.hryun818.com:82'//测试环境
export const testUrl = 'https://test.hryun818.com:82'//测试环境
export const redirectUrl = "https://test.hryun818.com:82/"//urlf
export const socketUrl = "ws://test.hryun818.com:82/hr/websocket/ws/"
export const baseLink = 'https://test.hryun818.com:82'//测试环境
export const lineUrl = 'https://test.hryun818.com:82'//线上环境

// export const AllDebug = true;
// export const imgAndVideoUrl = 'http://localhost:8089'//测试环境
// export const testUrl = 'http://localhost:8089'//测试环境
// export const redirectUrl = "http://localhost:8089"//url
// export const socketUrl = "ws://localhost:8089/hr/websocket/ws/"
// export const baseLink = 'http://localhost:8081'//测试环境
// export const lineUrl = 'http://localhost:8089'//线上环境

// export const AllDebug = true;
// export const imgAndVideoUrl = 'http://test.hryun818.com:82/'//测试环境
// export const testUrl = 'http://192.168.0.115'//测试环境
// export const redirectUrl = "http://test.hryun818.com:82/"//url
// export const socketUrl = "ws://test.hryun818.com:82/hr/websocket/ws/"
// export const baseLink = 'http://192.168.0.115'//测试环境
// export const lineUrl = 'http://test.hryun818.com:82'//线上环境
   
// export const AllDebug = false;
// export const imgAndVideoUrl = 'http://www.hryun818.com/'//测试环境
// export const testUrl = 'http://www.hryun818.com'//测试环境
// export const redirectUrl = "http://www.hryun818.com/"//url
// export const socketUrl = "ws://www.hryun818.com/hr/websocket/ws/"
// export const baseLink = 'http://www.hryun818.com'//测试环境
// export const lineUrl = 'http://www.hryun818.com'//线上环境

// export const AllDebug = false;
// export const imgAndVideoUrl = 'https://coe.hryun818.com/'//测试环境
// export const testUrl = 'https://coe.hryun818.com'//测试环境
// export const redirectUrl = "https://coe.hryun818.com/"//url
// export const socketUrl = "ws://coe.hryun818.com/hr/websocket/ws/"
// export const baseLink = 'https://coe.hryun818.com'//测试环境
// export const lineUrl = 'https://coe.hryun818.com'//线上环境

// export const AllDebug = true;
// export const imgAndVideoUrl = 'http://www.hryun818.com/'//测试环境
// export const testUrl = 'http://www.hryun818.com'//测试环境
// export const redirectUrl = "http://www.hryun818.com/"//url
// export const socketUrl = "ws://www.hryun818.com/hr/websocket/ws/"
// export const baseLink = 'http://www.hryun818.com'//测试环境
// export const lineUrl = 'http://www.hryun818.com'//线上环境

export function getBaseUrl_pc() {
    if(AllDebug){
        return testUrl +'/hr/api/'    
    }else{
        return lineUrl +'/hr/api/'
    }
}
// export function getBaseUrl() {
//     if(AllDebug){
//         return testUrl +'/api/'
//     }else
//     {
//         return lineUrl +'/api/'
//     }
// }
