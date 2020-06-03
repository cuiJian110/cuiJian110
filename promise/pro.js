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
    return readFileByPath("./test21.txt")
}).catch(err => {
    console.log("err",err)
    return readFileByPath("./test21.txt")
}).then(res => {
    console.log(res)
})