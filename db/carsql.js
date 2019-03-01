var CarSQL = {
    query: "select a.*,b.brand,b.model,b.type from car_list as a,car_type as b where a.cartype=b.id",
    delete:"delete from car_list where id=?",
    add:"insert into car_list(license,vin,cartype,state) values(?,?,?,'库存')",
    update:"update car_list set license=?,vin=?,cartype=? where id=?",
    updatestate:"update car_list set state=? where id=?",
    partner:"select * from sys_partner where 1=1",
    querypartner: "select * from sys_partner where type=?",
    queryinsurance:"select a.*,b.company_name from car_insurance as a,sys_partner as b where a.partner_id=b.id and car_id=?",
    addinsurance:"insert into car_insurance(id,type,partner_id,car_id,start_time,end_time,money) values(?,?,?,?,?,?,?)",
    deletepartner:"delete from sys_partner where id=?",
    addpartner:"insert into sys_partner(company_name,type) values(?,?)",
    updatepartner:"update sys_partner set company_name=?,type=? where id=?",
    queryviolation:"select a.*,b.license,c.name from car_violation as a,car_list as b,driver_list as c where a.car_id=b.id and a.driver_id=c.id",
};
module.exports = CarSQL;
