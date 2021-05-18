//引入express模块
const express = require('express');
//引入用户路由器
const proRouter = require('./router/pro.js');
const pro1Router = require('./router/pro1.js');
//console.log(userRouter);
//引入body-parser模块
const bodyParser = require('body-parser');
//创建web服务器
const app = express();
//设置端口
app.listen(8080);
//托管静态资源
app.use(express.static('./public'));
//使用body-parser将所有流传递的数据解析为对象
app.use(bodyParser.urlencoded({
    extended: false
}));
//挂载用户路由器到web服务器下,添加前缀/v1/users
//app.use('/pro/v1/',proRouter);
app.use('/pro/v1/', pro1Router);
//错误处理中间件
//要拦截的URL为空，表示拦截所有的
app.use((err, req, res, next) => {
    //err 产生的错误
    console.log(err);
    //响应500、服务器端错误
    res.send({code: 500, msg: '服务器端错误'});
});
