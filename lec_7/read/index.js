const fs = require("fs");
const { json } = require("stream/consumers");
fs.readFile("../user.txt","utf-8",(err,data)=>{
    if(err){
        return console.log(err)
    }
    let users = JSON.parse(data)
    console.log(users[0]);
})