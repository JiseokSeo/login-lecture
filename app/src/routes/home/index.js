'use strict'; // EC 표준 준수 표기

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.home); // '/' 경로로 콜백함수를 실행
router.get('/login', ctrl.login);

module.exports = router;