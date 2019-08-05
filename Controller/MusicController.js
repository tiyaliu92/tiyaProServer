// 引入模块
var mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://localhost:27017/baiyang");

var MusicSchema = mongoose.Schema;

// 创建表（集合）
var Music = mongoose.model("Music", new MusicSchema({
    name:String,
    content:String
}));

// 暴露模块
module.exports.Music = Music;

// MusicSchema.static.findByName = function(name){
//     Music.find({name:name},function(err,data){
//         if(err) throw err;
//         return data;
//     })
// }

// MusicSchema.static = 
// {
//     findByName: function (name) {
//         return Music
//             .find({name: name});
//     }
// }






// var stu = Music.findByName("张三");
// console.log(stu);


// var music1 = new Music({
//     name:"测试",
//     content:"测试"
// })


// music1.save();
