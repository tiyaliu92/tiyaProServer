// 引入模块
var mongoose = require("mongoose");
// 连接数据库，如果没有数据库，他会自行创建
mongoose.connect("mongodb://localhost:27017/baiyang");

// 创建集合，如果有集合，返回集合，没有集合，创建集合
var MusicChar = mongoose.model("Music",{
  name:String,
  content:String
})

// var music1 = new MusicChar({
//   name:"你给我记好",
//   content:"想哭就要笑"
// })

// 增加
// music1.save();

// 查看
// MusicChar.find({},(err,data)=>{
//   if(err) throw err;
//   console.log(data);
// })

// 修改
// MusicChar.update({"name":"夜曲"},{"name":"夜曲1"},(err,data)=>{
//   MusicChar.find({},(err,data)=>{
//     console.log(data);
//   })
// })

MusicChar.remove({name:"夜曲1"},(err,data)=>{
  MusicChar.find({},(err,data)=>{
    console.log(data);
  });
})