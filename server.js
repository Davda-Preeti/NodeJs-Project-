const http = require('http')
const path = require('path')
const fs = require('fs')

require('dotenv').config()

const PORT = process.env.PORT || 5000;

const server = http.createServer((req,res)=>{
    console.log (req.url)
    console.log (__dirname)
    console.log (__filename)

    //const filepath = path.join(__dirname,'index.html')
    console.log(filepath)
   // console.log(res)

   switch (req.url){
    case '/':
    var filepath= path.join(__dirname,'index.html')
    fs.readFile(filepath,"UTF-8",(err,content)=>{
        //console.log(content)
        res.end(content)
    })



    break;
    case '/about':
        var filepath= path.join(__dirname,'about.html')
          fs.readFile(filepath,"UTF-8",(err,content)=>{
        //console.log(content)
        res.end(content)

   })

   break;
   

   default:
    res.end("<h1>404 Page not found</h1>")
}
})

server.listen(PORT,()=>{
    console.log(`listen port number http://localhost:${PORT}`)})