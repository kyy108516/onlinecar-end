var UserSQL = {
    query:"select * from sys_user as a,sys_role as b where a.role_id=b.id",
    queryfunction:"select * from sys_function",
    updatefunction:"update sys_function set insurance=?,contract=?,violation=?,accident=? where id=1",
    queryrole:"select * from sys_role where 1=1",
};
module.exports = UserSQL;
