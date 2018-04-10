const con = require('./utils/connection');
const processor = require("./utils/processers");

const AddVote = (postid, userid) => {
    return new Promise((resolve, reject) => {
        query_str = 'CALL add_vote(?, ?, @out); SELECT @out as vote_id' ;
        con.query(query_str, [postid, userid], processor.processAddVoteResults(resolve, reject));
    });
};

const CheckIfValidVote = (postid, userid) => {
    return new Promise((resolve, reject) => {
        con.query('CALL get_valid_vote(?, ?)', [postid, userid], processor.processValidVoteResults(resolve, reject));
    });
};

module.exports = { AddVote, CheckIfValidVote };