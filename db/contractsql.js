var ContractSQL = {
    query: "select a.*,b.license,b.vin,c.`name`,c.phone,d.model from contract_list as a,car_list as b,driver_list as c,car_type as d where a.car_id=b.id and a.driver_id=c.id and b.cartype=d.id",
    delete:"delete from car_list where id=?",
    add:"insert into contract_list(id,type,car_id,driver_id,start_time,end_time,state,validatecheck,financecheck) values(?,?,?,?,?,?,'录入中','未完成','未完成')",
    additem:"insert into contract_item(id,type,period,money,time) values(?,?,?,?,?)",
    updatestate:"update contract_list set state=? where id=?",
    queryitem:"SELECT a.* from contract_item as a,contract_list as b where a.id=b.id",
    queryexpire:"select a.*,b.license,b.vin,c.`name`,c.phone,d.model from contract_list as a,car_list as b,driver_list as c,car_type as d where a.car_id=b.id and a.driver_id=c.id and b.cartype=d.id and TO_DAYS(end_time)-TO_DAYS(NOW())<=7",
    querydetain:"select a.*,c.license,d.name,d.phone from contract_detain as a,contract_list as b,car_list as c,driver_list as d where a.contract_id=b.id and b.car_id=c.id and b.driver_id=d.id and a.violation>=3 and a.accident >=2",
    updatedetain:"update contract_detain set state=? where id=?",
    adddetain:"insert into contract_detain(contract_id,state,accident,violation) values(?,'未扣车',0,0)",
    detainaccident:"update contract_detain set accident=accident+1 where contract_id=?",
    detainviolation:"update contract_detain set violation=violation+1 where contract_id=?",
    querysettle:"select a.*,b.license,b.vin,e.contract_id,c.`name`,c.phone,d.model,e.id from contract_list as a,car_list as b,driver_list as c,car_type as d,contract_validate as e where a.car_id=b.id and a.driver_id=c.id and b.cartype=d.id and a.state='结算中' and a.id=e.contract_id and e.type='还车'",
    updatesettle:"update contract_list set validatecheck=? where id=?",
};
module.exports = ContractSQL;