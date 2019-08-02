var createError = require('http-errors');
var express = require('express');
var app = express();
//跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
  });
  //接口
  app.get("/subject/:id?",function(req,res){
    console.log(req.params);
      if(req.params.id == "math"){
        res.json({
          data:["集合","几何"]
          })
        }else if(req.params.id == "yuwen"){
          res.json({
            data:["语文","英文"]
            })
        }else{
          res.json({
            data:["全部","都有"]
            })
        }
  })
  var server = app.listen(3001, function () {
    var port = server.address().port;
    console.info('复制打开浏览器', 'localhost:'+port)
  });

