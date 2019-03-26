var DriverSQL = {
    query: "select * from driver_list where 1=1",
    driverexist:"select * from driver_list where 1=1",
    delete:"delete from driver_list where id=?",
    add:"insert into driver_list(name,sex,phone,state) values(?,?,?,'否')",
    update:"update driver_list set name=?,sex=?,phone=? where id=?",
    updatestate:"update driver_list set state=? where id=?",
    finishcontract:"update driver_list set state='否' where phone=?",
};
module.exports = DriverSQL;