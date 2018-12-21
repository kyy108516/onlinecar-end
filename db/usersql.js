var UserSQL = {
    insert:'INSERT INTO user(user_id,user_password) VALUES(?,?)',
    queryAll:'SELECT * FROM user',
    select_id:'SELECT * FROM user WHERE user_id = ?',
    select_password:"SELECT * from user WHERE user_password=?"
};
module.exports = UserSQL;
