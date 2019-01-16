var CarTypeSQL = {
    queryAll: "select * from car_type",
    delete:"delete from car_type where id=?",
    add:"insert into car_type(brand) values(?)"
};
module.exports = CarTypeSQL;
