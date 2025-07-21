const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    // res.send("hello world!");
    // res.sendFile(__dirname+"/index.html")
    // res.json({
    //     name:"Soni",
    //     age:21
    // })
    res.end("bye")
})
//path variables
//query
app.get("/watch",(req,res)=>{
    let videoId = req.query.v;
    let nId = req.body.n;
    console.log(req.query)
    console.log("id got it")
})
//params
app.get("/watch/:v/:s",(req,res)=>{
    console.log(req.params.v)
    console.log(req.params.s)
    res.send("got it!!!");
})
app.listen(3000,()=>{
    console.log("Server Started");
});