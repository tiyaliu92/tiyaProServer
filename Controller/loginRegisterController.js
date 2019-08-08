//引入模块
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/userTable");

let LoginSchema = mongoose.Schema;

var Login = mongoose.model("userTable",new LoginSchema({
    username:String,
    pass:String
}))
module.exports.Login = Login;