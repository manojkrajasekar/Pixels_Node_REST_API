const con = require('./utils/connection');
const processor = require("./utils/processers");


const AddVote = (postid, userid) => {
    return new Promise((resolve, reject) => {
        con.query('CALL add_vote(?, ?)', [postid, userid], processor.processAddVoteResults(resolve, reject));
    });
};

const getVoteCount = (postid) => {
    return new Promise((resolve, reject) => {
        con.query('CALL get_vote_count_by_post(?)', [postid], processor.processgetVoteCountResults(resolve, reject));
    });
};

module.exports = { 
    AddVote,
    getVoteCount
};