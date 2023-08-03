'use strict';

// 아이디 데이터베이스
const user = {
    id: ['서지석'],
    psword: ['1111']
}

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
        const id = req.body.id,
            psword = req.body.psword;
        
        if (user.id.includes(id)) {
            const idx = user.id.indexOf(id);
            if (user.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            };
        };

        return res.json({
            success: false,
            msg: '로그인에 실패하셨습니다',
        });
    },
};

module.exports = {
    output,
    process,
};