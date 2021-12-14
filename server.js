const express=require('express')
const app=express()
app.listen(8081,()=>{
    console.log("Port listening @ 8081");
})
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})