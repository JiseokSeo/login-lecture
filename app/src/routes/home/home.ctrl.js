'use strict';

// 렌더할 페이지가 많은 경우, 일일히 render 함수를 작성하기 어렵고, 가시성이 안좋음.
const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login')
    }
};

const process = {
    login: (req, res) => {
        console.log(req.body);
    },
};

module.exports = {
    output,
    process,
};