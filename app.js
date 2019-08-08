var createError = require('http-errors');
var express = require('express');
var app = express();
// 解析前端传过来的body对象
var bodyParser = require("body-parser");

//音乐录入
var musicroute = require("./middleware/musicLibraryapi");
//登录 
var loginroute = require("./middleware/loginapi");
//注册
var registerroute = require("./middleware/registerapi");
//跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use("/api/musicLibrary",musicroute);
  app.use("/api/login",loginroute);
  app.use("/api/register",registerroute);
  
  // //json类型的body
  // app.use(bodyParser.json());
  // //string类型body
  // app.use(bodyParser.urlencoded({
  //   extended:false
  // }));
  // //静态文件目录
  // app.use(express.static(_dirname + 'public'));
  // //接口业务逻辑
  // app.use('/baseWeb/book/', require('./routes/baseweb_book'));




  // app.get("/subject/:id?",function(req,res){
  //   console.log(req.url);
    
  //   console.log(req.params);
  //     if(req.params.id == "math"){
  //       res.json({
  //         data:["集合","几何"]
  //         })
  //       }else if(req.params.id == "yuwen"){

  //         Music.find({},(err,data)=>{
  //           if(err) throw err;
            
  //           res.json({
  //             data:data
  //             })
  //         })

         
  //       }else{
  //         res.json({
  //           data:["全部","都有"]
  //           })
  //       }
  // })

  // var server = app.listen(3001, function () {
  //   var port = server.address().port;
  //   console.info('复制打开浏览器', 'localhost:'+port)
  // });

  app.listen(3001);

