const con = require('./utils/connection');
const processor = require("./utils/processers");

const getUserDetails = (userid) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_user_Details(?)', [userid], processor.processResults(resolve, reject));
    });
};

const updateUserDetails = (userId, firstName, lastName, mailId) => {
    return new Promise((resolve, reject) => {
        con.query('CALL update_user_details(?, ?, ?, ?)', [userId, firstName, lastName, mailId], processor.processResults(resolve, reject));
    });
};


module.exports = {
    getUserDetails,
    updateUserDetails
};