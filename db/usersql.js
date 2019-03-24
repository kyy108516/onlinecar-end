var UserSQL = {
    query:"select * from sys_user as a,sys_role as b where a.role_id=b.id",
    queryfunction:"select * from sys_function",
    updatefunction:"update sys_function set insurance=?,contract=?,violation=?,accident=? where id=1",
    queryrole:"select * from sys_role where 1=1",
    adduser:"insert into sys_user(username,password,role_id,type) values(?,?,?,'激活')",
    updateuser:"update sys_user set password=?,role_id=? where username=?",
    deleteuser:"delete from sys_user where username=?",
    queryrolemenu:"select b.* from sys_role as a,sys_menu as b,sys_role_menu as c,sys_user as d where c.role_id=a.id and b.id=c.menu_id and d.role_id=a.id",
    addrole:"insert into sys_role(id,name,description,state) values(?,?,?,'激活')",
    addrolemenu:"insert into sys_role_menu(role_id,menu_id) values(?,?)",
};
module.exports = UserSQL;
