const Blogs=require("../model/blog")
module.exports.addBlogs = async(req,res)=>{
    let {title,body,userId}=req.body;
    let userExists=await Users.findById(userId);
    if(userExists){
      let newBlog=new Blogs({
        title:title,
        body:body,
        date:Date.now(),
        userId:userId
    })
    await newBlog.save();
    userExists.blogs.push(newBlog._id);
    await userExists.save();
    res.json({
        success:true,
        data:newBlog,
        message:"blog added successfully!!!"
    })
    }
}
module.exports.getBlog = async(req,res)=>{
    let allblog=await Blogs.find();
    res.json({
        success:true,
        data:allblog
    })
}
module.exports.getOneBlog = async(req,res)=>{
    let {id}=req.params
    let blog=await Blogs.findOne({_id:id});
    res.json({
        success:true,
        data:blog
    })
}
module.exports.deleteBlog = async(req,res)=>{
  let {blogId} = req.params;
  let {userId} = req.body;
  if(!userId) return res.json({success:false,message:"user id is required"})
  let blogExist = await Blogs.findById(blogId);
  if(!blogExist) return res.json({
    success:false,
    message:"Blog not exist"
  })
  if(blogExist.userId  != userId){
    return res.json({
      success:false,
      message:"You are not allowed to delete this blog"
    })
  }
  await Blogs.findByIdAndDelete(blogId);
  let userExists = await Users.findById(userId);
  let blog =userExists.blogs.filter((id)=>id!=blogId);
  userExists.blogs = blog;
  await userExists.save();
  res.json({
    success:true,
    message:"Blog deleted",
    data:userExists
    
  })

}
module.exports.updateBlog = async (req, res)=>{

    let{blogId, userId}=req.params;
    let{title, body}=req.body;

    let blogExist=await Blogs.findById(blogId);
    if(!blogExist){
       return res.json({
            success:false,
            message:"Blog does not exist"
        })
    }
      if(blogExist.userId!=userId){
        return res.json({
            success:false,
            message:"You are not allowed to edit this blog"
        })
    }
  let updatedBlog=  await Blogs.findByIdAndUpdate(blogId, { title, body}, {new:true});
    res.json({
        success:true,
        message:"Blog edited successfully",
        data:updatedBlog
    })

}