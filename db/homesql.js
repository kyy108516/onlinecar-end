var HomeSQL = {
    allcar:"select count(*) as num from car_list",
    kucuncar:"select count(*) as num from car_list where state='库存'",
    yunyingcar:"select count(*) as num from car_list where state='运营中'",
    alldriver:"select count(*) as num from driver_list",
    qianyuedriver:"select count(*) as num from driver_list where state='是'",
    yuqidriver:"select COUNT(DISTINCT(a.phone)) as num from driver_list as a,contract_list as b,account_receivable as c where a.id=b.driver_id and b.id=c.contract_id and TO_DAYS(c.time)<TO_DAYS(NOW())",
};
module.exports = HomeSQL;