const express = require("express");
const router = express.Router();// small application
const {addBlogs,getBlog,getOneBlog,deleteBlog,updateBlog} = require("../controller/blogController")


router.post("/",addBlogs)

router.get("/",getBlog)

router.get("/:id",getOneBlog)
router.delete("/:blogId",deleteBlog)
router.put("/:blogId/:userId",updateBlog )

module.exports = router;
