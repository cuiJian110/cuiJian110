const fs = require("fs");
function readFileByPath(path) {
    let p = new Promise(function(res,rej) {
        fs.readFile(path,"utf-8",(err,data) => {
            if(err) rej(err)
            return res(data)
        })
    })
    return p;
}
readFileByPath("./test1.txt").then(res => {
    console.log(res)
    // return readFileByPath("./test2.txt")
}).catch(err => {
    console.log("err",err)
    return readFileByPath("./test3.txt")
}).then(res => {
    console.log("res")
    console.log(res)
})
// async function test() {
//     let r1 = await readFileByPath("./test1.txt");
//     console.log(r1)
//     let r2 = await readFileByPath("./test2.txt");
//     console.log(r2)
//     let r3 = await readFileByPath("./test3.txt");
//     console.log(r3)
//     let r4 = await readFileByPath("./test4.txt");
//     console.log(r4)
// }
// test()