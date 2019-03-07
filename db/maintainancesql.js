var MaintainanceSQL = {
    query:"SELECT a.*,b.license,c.company_name from car_maintenance as a,car_list as b,sys_partner as c where a.car_id=b.id and a.partner_id=c.id",
    add:"insert into car_maintenance(id,type,money,send_time,season,partner_id,car_id,state) values(?,?,?,?,?,?,?,'未完成')",
    update:"update car_maintenance set state='已完成' where id=?",
};
module.exports = MaintainanceSQL;
