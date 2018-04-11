const con = require('./utils/connection');
const processor = require("./utils/processers");


const UpdateVote = (postid, userid) => {
    return new Promise((resolve, reject) => {
        con.query('CALL add_vote(?, ?)', [postid, userid], processor.processUpdateResults(resolve, reject));
    });
};

// const getVoteCount = (postid) => {
//     return new Promise((resolve, reject) => {
//         con.query('CALL get_vote_count_by_post(?)', [postid], processor.processgetVoteCountResults(resolve, reject));
//     });
// };

module.exports = { 
    UpdateVote
    // getVoteCount
};