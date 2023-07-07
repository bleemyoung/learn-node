const fs=require('fs')

// const txtInput=fs.readFileSync('./txt/input.txt','utf-8')
// console.log(txtInput);
// const txtOutput=`this is new output:${txtInput}`
// console.log(txtOutput);
// fs.writeFileSync('./txt/output.txt',txtOutput)

// P7的代码

fs.readFile('./txt/input.txt','utf-8',(err,data1)=>{
    if(err){
        console.log("error");
        return
    }
    console.log(data1);
    fs.readFile('./txt/add.txt','utf-8',(err,data2)=>{
        console.log(data2);
        fs.writeFile('./txt/output.txt',`final file:\n${data1}\n${data2}`,'utf-8',err=>{
            console.log("file written");
        })
    })
})
console.log("reading files");
// P9