var MaintainanceSQL = {
    query:"SELECT a.*,c.license,d.`name`,e.company_name from car_maintenance as a,contract_list as b,car_list as c,driver_list as d,sys_partner as e WHERE a.contract_id=b.id and a.car_id=c.id and a.driver_id=d.id and a.partner_id=e.id",
};
module.exports = MaintainanceSQL;
