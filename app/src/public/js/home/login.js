'use strict'; // 로그인 기능 구현

// DOM : html의 데이터를 가져와 자바스크립트로 다룰 수 있게 해주는 인터프리터의 일종

const id = document.querySelector("#id"), // #: id 태그의 값을 가져옴
    psword = document.querySelector('#psword'),
    loginBtn = document.querySelector('button'); // 그냥 넣으면 tag 전체를 가져옴

loginBtn.addEventListener('click', login);

function login() {
    console.log('로그인 버튼 클릭');
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);

    fetch('/login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req);
    }) // fetch({API경로}, {전달대상})
};