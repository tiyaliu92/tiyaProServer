let {Login} = require("../Controller/loginRegisterController");
let express = require("express");
let router = express.Router();

//注册
router.post("/",(req,res)=>{
    Login.find(req.body,(err,data)=>{
        console.log(data);
        if(err || data.length == 0){
            Login(req.body).save((err,data)=>{
                if(err) throw err;
                res.json({
                    code:200,
                });
            })
        }else{//用户已存在
            res.json({
                code:201 
            });
        }
        
    })
   
})

module.exports = router;