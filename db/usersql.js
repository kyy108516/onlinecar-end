var UserSQL = {
    insert:'INSERT INTO user(username,password) VALUES(?,?)',
    queryAll:'SELECT * FROM user',
    select_id:'SELECT * FROM user WHERE username = ?',
    select_password:"SELECT * from user WHERE password=?"
};
module.exports = UserSQL;
