var ValidateSQL = {
    add:"insert into contract_validate(contract_id,time,state) values(?,?,'否')",
    additem:"insert into contract_validate_item(id,description,money) values(?,?,?)"
};
module.exports = ValidateSQL;