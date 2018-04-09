const con = require('./utils/connection');
const processor = require("./utils/processers");

const postAddVote = (postid, userid) => {
    return new Promise((resolve, reject) => {
        query_str = 'CALL add_vote(?, ?, @out); SELECT @out as vote_id' ;
        con.query(query_str, [postid, userid], processor.processVoteResults(resolve, reject));
    });
};

const getCheckValidVote = (postid, userid) => {
    return new Promise((resolve, reject) => {
        con.query('CALL get_valid_vote(?, ?)', [postid, userid], processor.processVoteResults(resolve, reject));
    });
};

module.exports = { postAddVote, getCheckValidVote };