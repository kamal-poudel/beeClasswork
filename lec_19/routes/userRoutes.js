const express = require("express");
const { route } = require("./blogRoutes");
const {addUser,getUser,getOneUser} = require("../controller/userController")
const router = express.Router();
router.post("/",addUser );
router.get("/", getUser);
router.get("/:id", getOneUser);
module.exports = router;