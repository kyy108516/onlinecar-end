var UserSQL = {
    insert:'INSERT INTO user(user_id,user_password) VALUES(?,?)',
    queryAll:'SELECT * FROM user',
    getUserById:'SELECT * FROM user WHERE user_id = ? ',
};
module.exports = UserSQL;
