// export const AllDebug = true;
// export const testUrl = 'http://192.168.0.119:8081'//测试环境
// export const lineUrl = 'http://192.168.0.119:8081'//测试环境
// export const imgAndVideoUrl = 'http://192.168.0.119:8081/'//测试环境
// export const redirectUrl = "http://192.168.0.119:8081/"//url
// export const socketUrl = "ws://192.168.0.119:8081/eduUserMessageSocket"
// export const baseLink = 'http://192.168.0.119::8081'//测试环境

// export const AllDebug = false;
// export const imgAndVideoUrl = 'https://test.hryun818.com/'//测试环境
// export const testUrl = 'http://office.hryun818.com/'//测试环境
// export const redirectUrl = "https://test.hryun818.com/"//url
// export const socketUrl = "wss://test.hryun818.com/eduUserMessageSocket"
// export const baseLink = 'https.hryun818.com'//测试环境
// export const lineUrl = 'http://office.hryun818.com/'//线上环境

// export const AllDebug = false;
// export const imgAndVideoUrl = 'https://app.hryun818.com/'//测试环境
// export const testUrl = 'https://app.hryun818.com'//测试环境
// export const redirectUrl = "https://app.hryun818.com/"//url
// export const socketUrl = "wss://app.hryun818.com/eduUserMessageSocket"
// export const baseLink = 'https://app.hryun818.com'//测试环境
// export const lineUrl = 'https://app.hryun818.com'//线上环境

export const AllDebug = true;
export const imgAndVideoUrl = 'http://localhost:8089/'//测试环境
export const testUrl = 'http://192.168.0.112:5000/'//测试环境
export const redirectUrl = "http://localhost:8089/"//url 
export const socketUrl = "ws://localhost:8089/eduUserMessageSocket"
export const baseLink = 'http://localhost:8081'//测试环境
export const lineUrl = 'http://192.168.0.112:5000/'//线上环境



export function getBaseUrl() {
    if (AllDebug) {
        return testUrl + 'api/'
    } else {
        return lineUrl + 'api/'
    }
}
