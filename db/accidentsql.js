var AccidentSQL = {
    query:"select a.*,c.license,d.name from contract_accident as a,contract_list as b,car_list as c,driver_list as d WHERE a.contract_id=b.id and b.car_id=c.id and b.driver_id=d.id",
};
module.exports = AccidentSQL;