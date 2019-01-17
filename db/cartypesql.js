var CarTypeSQL = {
    queryAll: "select * from car_type",
    delete:"delete from car_type where id=?",
    add:"insert into car_type(brand) values(?)",
    queryById:"select * from car_type where id=?",
    update:"update car_type set brand=? where id=?"
};
module.exports = CarTypeSQL;
