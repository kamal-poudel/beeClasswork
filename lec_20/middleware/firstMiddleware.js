function m1(req,res,next){
    console.log("running middleware1..");
    req.userId = "4";
    return next()
    console.log("after 1 next")

}
function m2(req,res,next){
    console.log("running middleware2... ");
    console.log(req.userId);
    req.isAdmin = true;
    return next()
    console.log("after 2 next")
}
module.exports.m1 = m1;
module.exports.m2 = m2;