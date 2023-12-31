'use strict';

const UserStorage = require('../../models/UserStorage')
const users = UserStorage.getUsers('id', 'psword');


// 렌더할 페이지가 많은 경우, 일일히 render 함수를 작성하기 어렵고, 가시성이 안좋음.
const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login')
    },
    register: (req, res) => {
        res.render('home/register')
    },
};

const process = {
    login: (req, res) => {
        console.log('로그인 시도');

        const id = req.body.id,
            psword = req.body.psword;
        
        const response = {}; // 로그인 결과를 담는 객체
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            };
        }
        
        response.success = false;
        response.msg = '로그인에 실패하셨습니다'
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};