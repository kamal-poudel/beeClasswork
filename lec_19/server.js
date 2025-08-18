const express=require("express");
const mongoose=require("mongoose");
const blogRoute =  require("./routes/blogRoutes")
const userRoute = require("./routes/userRoutes")
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const Blogs=require("./model/blog")
const Users=require("./model/user")

app.use("/api/blogs",blogRoute);
app.use("/api/users",userRoute);


app.listen(3000,()=>{
    console.log("Server started");
})

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected!'));