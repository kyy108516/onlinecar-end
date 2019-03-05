var AccountSQL = {
    queryreceivable:"select * from account_receivable WHERE 1=1",
    querypractical:"select * from account_practical where 1=1",
    querybill:"select * from account_bill where 1=1",
    querydetail:"select * from account_detail where 1=1",
    addreceivable:"insert into account_receivable(contract_id,money,time,state,type,already_money) values (?,?,?,'未完成',?,0)",
};
module.exports = AccountSQL;