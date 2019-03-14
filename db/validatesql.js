var ValidateSQL = {
    add:"insert into contract_validate(contract_id,time,state,type,money) values(?,?,'未验车',?,'0')",
    query:"select a.*,c.license,c.vin,d.model from contract_validate as a,contract_list as b,car_list as c,car_type as d where a.contract_id=b.id and b.car_id=c.id and c.cartype=d.id",
    additem:"insert into contract_validate_item(id,description,money) values(?,?,?)",
    updatestate:"update contract_validate set state=?,money=? where id=?",
    queryitem:"select a.*,b.type from contract_validate_item as a,contract_validate as b where a.id=b.id"
};
module.exports = ValidateSQL;