// 引入模块
var mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://localhost:27017/test");
//mongoose.connect("mongodb+srv://Bella:x123456@cluster0-4zdq0.mongodb.net/musicLibrary?retryWrites=true&w=majority");

var MusicLibrarySchema = mongoose.Schema;

// 创建表（集合）
var Musiclibrary = mongoose.model("Musiclibrary", new MusicLibrarySchema({
    musicName: String,
    singerName: String,
    albumName: String,
    publishTime: String,
    isCollected: Boolean,
    songList: String,
    musicLibrary: String,
    lyric: String
}));

// 暴露模块
module.exports.Musiclibrary = Musiclibrary;

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
