const mariadb = require('mariadb');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'dbtest',
    connectionLimit: 5,
    acquireTimeout: 300 
}

class DBConnector{
    dbconnector = mariadb.createPool(config);
    
    async query(param){
        var conn = await this.dbconnector.getConnection();
        var ret = null;
        await conn.query(param).then(data =>{
            ret = data;
            console.log(data);
            conn.end();
        })
        .catch(err => {
            console.log(err);
            conn.end()
        })
        return ret;
    }
}

module.exports = new DBConnector();
