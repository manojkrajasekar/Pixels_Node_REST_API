const con = require('./utils/connection');
const processor = require("./utils/processers");

const getUserDetails = (userid) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_user_Details(?)', [userid], processor.processResults(resolve, reject));
    });
};


module.exports = {
    getUserDetails
}