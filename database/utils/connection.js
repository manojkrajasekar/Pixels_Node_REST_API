const mysql = require('mysql');
const mysqlConfig = require("../../configs/mysql.config");
const logger = require("../../utils/logger");

const con = mysql.createConnection(mysqlConfig);

con.connect((err) => {
    if (err) {
        logger.error("Could not connect to mql server!");
        return;
    }

    logger.info("Connected!");
    
    con.query('USE photoapp;', (err, result) => {
        if (err) {
            logger.error("Could not connect to the database 'photoapp'!");
            return;
        }
        
        logger.info('Using the photoapp database');
    });
});

module.exports = con;