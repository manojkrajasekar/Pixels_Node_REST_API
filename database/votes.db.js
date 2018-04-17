const con = require('./utils/connection');
const processor = require("./utils/processers");


const updateVote = (postid, userid, voteid) => {
    return new Promise((resolve, reject) => {
        con.query(
            'CALL update_vote(?, ?, ?)',
            [postid, userid, voteid], 
            processor.processUpdateResults(resolve, reject)
        );
    });
};

module.exports = { 
    updateVote
};