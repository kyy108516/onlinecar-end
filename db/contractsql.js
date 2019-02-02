var ContractSQL = {
    query: "select a.id,a.type,a.start_time,a.end_time,b.license,b.vin,c.`name`,c.phone,d.model from contract_list as a,car_list as b,driver_list as c,car_type as d where a.car_id=b.id and a.driver_id=c.id and b.cartype=d.id",
    delete:"delete from car_list where id=?",
    add:"insert into car_list(license,vin,cartype,state) values(?,?,?,'库存')",
    update:"update car_list set license=?,vin=?,cartype=? where id=?",
};
module.exports = ContractSQL;