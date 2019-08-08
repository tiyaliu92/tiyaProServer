let {Login} = require("../Controller/loginRegisterController");
let express = require("express");
let router = express.Router();

//登录
router.post("/",(req,res)=>{
    Login.find(req.body,(err,data)=>{
        console.log(data);
        res.json({
           data
        });
    })
})

module.exports = router;