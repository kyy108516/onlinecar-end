var HomeSQL = {
    allcar:"select count(*) as num from car_list",
    kucuncar:"select count(*) as num from car_list where state='库存'",
    yunyingcar:"select count(*) as num from car_list where state='运营中'",
    alldriver:"select count(*) as num from driver_list",
    qianyuedriver:"select count(*) as num from driver_list where state='是'",
    yuqidriver:"select COUNT(DISTINCT(a.phone)) as num from driver_list as a,contract_list as b,account_receivable as c where a.id=b.driver_id and b.id=c.contract_id and b.state!='已完成' and TO_DAYS(c.time)<TO_DAYS(NOW())",
    zsr:"select sum(money) as money from account_detail where state='收入'",
    zzc:"select sum(money) as money from account_detail where state='支出'",
    sr:"select DISTINCT(type) as name,SUM(money) as value from account_detail where state='收入' GROUP BY name",
    zc:"select DISTINCT(type) as name,SUM(money) as value from account_detail where state='支出' GROUP BY name",
};
module.exports = HomeSQL;