var MaintainanceSQL = {
    query:"SELECT a.*,c.license,d.`name`,e.company_name from car_maintenance as a,contract_list as b,car_list as c,driver_list as d,sys_partner as e WHERE a.contract_id=b.id and a.car_id=c.id and b.driver_id=d.id and a.partner_id=e.id",
    add:"insert into car_maintenance(id,type,money,send_time,season,partner_id,contract_id,car_id,driver_id) values(?,?,?,?,?,?,?,?,?)",
};
module.exports = MaintainanceSQL;
