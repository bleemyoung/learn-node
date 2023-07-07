const fs = require('fs')
const http = require('http')

// server
const server=http.createServer((req, res) => {
    res.end("hi,this is server")
})
server.listen(8080,'127.0.0.1',()=>{
    console.log("server running");
})
console.log("reading files");
// 127.0.0.1:8080
// P10