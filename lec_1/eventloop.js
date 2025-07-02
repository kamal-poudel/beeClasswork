const fs = require("fs");
console.log("start");
setTimeout(()=>{
    console.log("timer callback");
},0);
setImmediate(()=>{
    console.log("set immediate");
})
function doSomeTask(){
    return new Promise((resolve,reject)=>{
        resolve("promise chla");
    })
}
fs.readFile("demo.txt","utf-8",(data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2");
    },0)
    setImmediate(()=>{
        console.log("immd 2");
    })
})
process.nextTick(()=>{
    console.log("next tick");
})
console.log("end");

doSomeTask().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
// process.nexttick
//micro task