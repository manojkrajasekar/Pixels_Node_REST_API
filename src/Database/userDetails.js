const con = require('../MySQl_Connection/connection');

getuserdetails = (userid) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_user_Details(?)', [userid], (err, result) =>{
            if(err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

getinitialinfo = (userid) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_initial_info(?)', [userid], (err, result) => {
            if(err) {
                return reject(err);
            }
            resolve(result);
        });
     });
};


module.exports = {
    getuserdetails,
    getinitialinfo
};