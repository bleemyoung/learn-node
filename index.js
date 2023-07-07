const fs=require('fs')

const txtInput=fs.readFileSync('./txt/input.txt','utf-8')
console.log(txtInput);

const txtOutput=`this is new output:${txtInput}`
console.log(txtOutput);

fs.writeFileSync('./txt/output.txt',txtOutput)
// P7的代码