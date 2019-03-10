var ContractSQL = {
    query: "select a.*,b.license,b.vin,c.`name`,c.phone,d.model from contract_list as a,car_list as b,driver_list as c,car_type as d where a.car_id=b.id and a.driver_id=c.id and b.cartype=d.id",
    delete:"delete from car_list where id=?",
    add:"insert into contract_list(id,type,car_id,driver_id,start_time,end_time,state) values(?,?,?,?,?,?,'录入中')",
    additem:"insert into contract_item(id,type,period,money,time) values(?,?,?,?,?)",
    updatestate:"update contract_list set state=? where id=?",
    queryitem:"SELECT a.* from contract_item as a,contract_list as b where a.id=b.id",
    queryexpire:"select a.*,b.license,b.vin,c.`name`,c.phone,d.model from contract_list as a,car_list as b,driver_list as c,car_type as d where a.car_id=b.id and a.driver_id=c.id and b.cartype=d.id and TO_DAYS(end_time)-TO_DAYS(NOW())<=7"
};
module.exports = ContractSQL;