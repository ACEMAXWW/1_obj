//引入express模块
const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//console.log(pool);
//创建路由器对象
const r = express.Router();

r.get('/login/:uname&:upwd', (req, res) => {
    var _uname = req.params.uname;
    var _upwd = req.params.upwd;
    var sql = 'select * from xz_user where uname=? and upwd=?';
    pool.query(sql, [_uname, _upwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send('1');
        } else {
            res.send('0');
        }
        ;
    });
});
r.get('/list', (req, res) => {
    var sql = 'select * from xz_user';
    pool.query(sql, (err, result) => {
        if (err) throw  err;
        res.send(result);
    });
});
r.delete('/delUser/:uid', (req, res) => {
    var _uid = req.params.uid;
    var sql = 'delete from xz_user where uid=?';
    pool.query(sql, [_uid], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send('1');
        } else {
            res.send('0')
        }
    });
});


//导出路由器对象
module.exports = r;