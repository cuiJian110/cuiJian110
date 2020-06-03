const fs = require("fs");
// fs.readFile("./test1.txt","utf-8",(err,data) => {
//     console.log(data)
// })
// fs.readFile("./test2.txt","utf-8",(err,data) => {
//     console.log(data)
// })
// fs.readFile("./test3.txt","utf-8",(err,data) => {
//     console.log(data)
// })
// fs.readFile("./test4.txt","utf-8",(err,data) => {
//     console.log(data)
// })
function readFileByPath(path) {
    return new Promise((res,rej) => {
        fs.readFile(path,"utf-8",(err,data) => {
            res({code: 200,data})
        })
    })
}
// let a = readFileByPath("./test1.txt").then(res => {
//     console.log(res)
//     return readFileByPath("./test2.txt")
// }).then(res => {
//     console.log("res1",res)
//     return readFileByPath("./test3.txt")
// }).then(res => {
//     console.log("res2",res)
//     return readFileByPath("./test4.txt")
// }).then(res => {
//     console.log("res3",res)
//     // return readFileByPath("./test4.txt")
// })
// console.log(a)
//做饭
function cook(){
    console.log('开始做饭。');
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('做饭完毕！');
            resolve('鸡蛋炒饭');
        }, 1000);
    });
    return p;
}
 
p = cook();
 
p.then((data) => {
  console.log("data",data)
})
 
console.log('--------------')
 
p.then((data) => {
  console.log("data1",data)
})
 
p.then((data) => {
  console.log("data2",data)
})