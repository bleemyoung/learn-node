const fs=require('fs')

fs.readFile('../txt/input.txt','utf-8',(err,data)=>{
    console.log(data);
})
console.log("reading");
// 这是异步代码 asynchronous，在执行readFile的时候，不阻塞，接下来的代码块继续运行
// 