var CarSQL = {
    query: "select a.*,b.brand,b.model,b.type from car_list as a,car_type as b where a.cartype=b.id",
    delete:"delete from car_list where id=?",
    add:"insert into car_list(license,vin,cartype,state) values(?,?,?,'库存')",
    update:"update car_list set license=?,vin=?,cartype=? where id=?",
    updatestate:"update car_list set state=? where id=?"
};
module.exports = CarSQL;
