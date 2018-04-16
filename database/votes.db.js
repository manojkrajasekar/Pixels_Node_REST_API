const con = require('./utils/connection');
const processor = require("./utils/processers");


const updateVote = (postid, userid, voteid) => {
    return new Promise((resolve, reject) => {
        con.query('SET @vote_id = ?; CALL update_vote(?, ?, @vote_id); SELECT @vote_id as vote;', [voteid, postid, userid], processor.processVoteResults(resolve, reject));
    });
};

module.exports = { 
    updateVote
};