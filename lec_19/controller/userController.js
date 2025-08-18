const Users=require("../model/user")
module.exports.addUser = async (req, res) => {
  let { email, username, password } = req.body;
  let newUser = new Users({
    email: email,
    username: username,
    password: password
  });
  await newUser.save();
  res.json({
    success: true,
    data: newUser,
    message: "user added successfully!!!"
  })
}
module.exports.getUser = async (req, res) => {
  let allUsers = await Users.find();
  res.json({
    success: true,
    data: allUsers
  });
}
module.exports.getOneUser = async (req, res) => {
  let { id } = req.params;
  let user = await Users.findOne({ _id: id });
  res.json({
    success: true,
    data: user
  });
}