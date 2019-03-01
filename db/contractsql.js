var ContractSQL = {
    query: "select a.*,b.license,b.vin,c.`name`,c.phone,d.model from contract_list as a,car_list as b,driver_list as c,car_type as d where a.car_id=b.id and a.driver_id=c.id and b.cartype=d.id",
    delete:"delete from car_list where id=?",
    add:"insert into contract_list(id,type,car_id,driver_id,start_time,end_time,state) values(?,?,?,?,?,?,'执行中')",
    additem:"insert into contract_item(id,type,period,money,time) values(?,?,?,?,?)",
    update:"update car_list set license=?,vin=?,cartype=? where id=?",
};
module.exports = ContractSQL;