var AccidentSQL = {
    query:"select a.*,c.license,d.name from contract_accident as a,contract_list as b,car_list as c,driver_list as d WHERE a.contract_id=b.id and b.car_id=c.id and b.driver_id=d.id",
    add:"insert into contract_accident(id,contract_id,happen_site,happen_time,money,state,car_id,driver_id) values(?,?,?,?,?,'待结案',?,?)",
    additem:"insert into contract_accident_item(id,type,money) values(?,?,?)",
    update:"update contract_accident set state=? where id=?",
};
module.exports = AccidentSQL;