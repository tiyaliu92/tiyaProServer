var {Student} = require("../Controller/StudentController");
var express = require("express");
var router = express.Router();

router.get("/",(req,res)=>{
    Student.find({},(err,data)=>{
        res.json(data);
    })
})

// 修改指定音乐
router.put("/:id",(req,res)=>{
    Student.update({_id:req.params.id},{ name:req.query.name,
        content:req.query.content},(err,data)=>{
            res.json(data);
        })
})
// 增加音乐
router.post("/",(req,res)=>{
    new Student(req.body).save((err,data)=>{
        res.json({
            data
        });
    })
})

module.exports = router;
