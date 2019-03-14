var UserSQL = {
    insert:'INSERT INTO user(username,password) VALUES(?,?)',
    queryAll:'SELECT * FROM user',
    select_id:'SELECT * FROM user WHERE username = ?',
    select_password:"SELECT * from user WHERE password=?",
    queryfunction:"select * from sys_function",
    updatefunction:"update sys_function set insurance=?,contract=?,violation=?,accident=? where id=1",
};
module.exports = UserSQL;
