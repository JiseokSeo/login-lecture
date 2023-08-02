'use strict'

// 모듈
const express = require('express'); // import랑 비슷한 개념. express 라는 모듈 찾기. 변수선언으로 import가 수행됨
const app = express();
const bodyParser = require('body-parser')

const PORT = 3000

//라우팅
const home = require('./src/routes/home')

// 앱 세팅
app.set('views', './src/views') // 뷰 단을 분리할 것임. 뷰 단의 경로를 지정.
app.set('view engine', 'ejs') // ejs 엔진을 사용해서 뷰단을 처리 (ejs 확장자)


app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // 한글, 공백 인식
app.use('/', home); // use -> 미들웨어를 등록하는 메서드

module.exports = app;
