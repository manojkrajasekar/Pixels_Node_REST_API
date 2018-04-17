const con = require('./utils/connection');
const processor = require("./utils/processers");


const updateVote = (postid, userid, voteid, isactive) => {
    return new Promise((resolve, reject) => {
        con.query('SET @vote_id = ?, @is_active = ?; CALL update_vote(?, ?, @vote_id, @is_active); SELECT @vote_id as voteId; SELECT @is_active as isActive',
                    [voteid, postid, userid], processor.processVoteResults(resolve, reject));
    });
};

module.exports = { 
    updateVote
};