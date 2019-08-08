let {Login} = require("../Controller/loginRegisterController");
let express = require("express");
let router = express.Router();

//登录
router.post("/",(req,res)=>{
    Login.find(req.body,(err,data)=>{
        if(data.length>0){
            res.json({
                code:200
             });
        }else{
            res.json({
                code:202,
                message:'用户不存在，请先登录'
             });
        }
        
    })
})

module.exports = router;