var DriverSQL = {
    query: "select * from driver_list where 1=1",
    delete:"delete from driver_list where id=?",
    add:"insert into driver_list(name,sex,phone) values(?,?,?)",
    update:"update driver_list set name=?,sex=?,phone=? where id=?",
};
module.exports = DriverSQL;