var AccountSQL = {
    queryreceivable:"select a.* from account_receivable as a,contract_list as b WHERE a.contract_id=b.id",
    querypractical:"select * from account_practical where 1=1 order by time desc",
    querybill:"select * from account_bill where 1=1",
    querydetail:"select * from account_detail where 1=1 order by time desc",
    addreceivable:"insert into account_receivable(id,contract_id,money,time,state,type,already_money) values (?,?,?,?,'未完成',?,0)",
    addpractical:"insert into account_practical(id,receivable_id,money,time,type) values (?,?,?,?,?)",
    updatereceivable:"update account_receivable set already_money=already_money+?,state=? where id=?",
    adddetail:"insert into account_detail(id,type,state,money,time) values(?,?,?,?,?)",
    addbill:"insert into account_bill(id,type,money,state) values (?,?,?,'未完成')",
    updatebill:"update account_bill set time=?,state=? where id=?",
};
module.exports = AccountSQL;