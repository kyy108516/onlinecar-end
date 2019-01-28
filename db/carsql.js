var CarSQL = {
    query: "select * from car_list,car_type where car_list.cartype=car_type.id",
    delete:"delete from car_list where id=?",
};
module.exports = CarSQL;
