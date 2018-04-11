const con = require('./utils/connection');
const processor = require("./utils/processers");


const UpdateVote = (postid, userid, voteid) => {
    return new Promise((resolve, reject) => {
        //query_str = 'SET @_vote_id = voteid; CALL update_vote(?, ?, @vote_id);'
        con.query('SET @vote_id = ?; CALL update_vote(?, ?, @vote_id);', [voteid, postid, userid], processor.processUpdateResults(resolve, reject));
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