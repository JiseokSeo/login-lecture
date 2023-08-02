'use strict';

const home = (req, res) => {
    res.render('home/index'); // app.set('view', './views')로 이미 뷰 경로를 지정함
};

const login = (req, res) => {
    res.render('home/login'); 
};

module.exports = {
    home, // home: home 같음 EC6에서 추가됨
    login,
};