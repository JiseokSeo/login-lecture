"use strict";

// 계정 데이터베이스
class UserStorage {
    static #users = {
        id: ['서지석'],
        psword: ['1111']
    };
    
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}


module.exports = UserStorage;