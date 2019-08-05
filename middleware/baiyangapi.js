var {Music} = require("../Controller/MusicController");

function baiyangapi(app){
    // 查询所有音乐
    app.get("/music",(req,res)=>{
        Music.find({},(err,data)=>{
            if(err) throw err;
            res.json({
                data
            });
        })
    })
    // 删除指定音乐
    app.delete("/music/:id",(req,res)=>{
        Music.remove({_id:req.params.id},(err,data)=>{
            res.json({data});
        })
    })
    // 修改指定音乐
    app.put("/music/:id",(req,res)=>{
        Music.update({_id:req.params.id},{ name:req.query.name,
            content:req.query.content},(err,data)=>{
                res.json(data);
            })
    })

    // 增加音乐
    app.post("/music",(req,res)=>{
        var music = new Music({
            name:req.query.name,
            content:req.query.content
        });
        music.save((err,data)=>{
            res.json({
                data
            });
        })
        
    })
}

module.exports.baiyangapi = baiyangapi;
