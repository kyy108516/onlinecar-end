var CarTypeSQL = {
    queryAll: "select * from car_type where state='激活'",
    delete:"update car_type set state='禁用' where id=?",
    add:"insert into car_type(brand,model,type,state) values(?,?,?,'激活')",
    queryById:"select * from car_type where id=?",
    update:"update car_type set brand=?,model=?,type=? where id=?"
};
module.exports = CarTypeSQL;
