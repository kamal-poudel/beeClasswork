const express = require("express");
const fs = require("fs");
const cors = require('cors');
const app = express();

app.use(express.static(__dirname+"/public"))
app.use(cors());
app.get("/users",(req,res)=>{
    fs.readFile("./user.json","utf-8",(err,data)=>{
        if(err) res.send(err);
        let allUsers = JSON.parse(data);
        res.json(allUsers)
    })

})
app.listen(3000,()=>{
    console.log("server started")
})