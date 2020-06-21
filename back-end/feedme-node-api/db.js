const sql = require("mssql");

const config = {
    server: "localhost\\SQL2K14",
    database: "SampleDb",
    user: "sa",
    password: "sql2014",
    port: 1433
};

module.exports.database = {
    getConnection(){
        return sql.createConnection(config);
    }
};