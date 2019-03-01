var AccountSQL = {
    queryreceivable:"select * from account_receivable WHERE 1=1",
    querypractical:"select * from account_practical where 1=1",
    querybill:"select * from account_bill where 1=1",
    querydetail:"select * from account_detail where 1=1",
};
module.exports = AccountSQL;