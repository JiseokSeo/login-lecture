'use strict'; // 로그인 기능 구현

// DOM : html의 데이터를 가져와 자바스크립트로 다룰 수 있게 해주는 인터프리터의 일종

const id = document.querySelector("#id"), // #: id 태그의 값을 가져옴
    psword = document.querySelector('#psword'),
    loginBtn = document.querySelector('button'); // 그냥 넣으면 tag 전체를 가져옴

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch('/login', { // fetch({API경로}, {전달대상}).then(res) => {콜백}
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        };
    })
    .catch((err) => {
        console.error(new Error('로그인 중 에러 발생'))
    });
};