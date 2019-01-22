var CarTypeSQL = {
    queryAll: "select * from car_type where 1=1",
    delete:"delete from car_type where id=?",
    add:"insert into car_type(brand,model,type) values(?,?,?)",
    queryById:"select * from car_type where id=?",
    update:"update car_type set brand=?,model=?,type=? where id=?"
};
module.exports = CarTypeSQL;
