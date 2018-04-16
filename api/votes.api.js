const votes = require('../database/votes.db');
const logger = require('../utils/logger');

const updateVote = (req, res) => {
    let postId = req.body.post_id;
    let userId = req.body.user_id;
    let voteId = req.body.vote_id;
    let errorMessage;

    if (isNaN(postId)) {
        errorMessage = 'Post ID should be an integer';
    } else if (isNaN(userId)) {
        errorMessage = 'User ID should be an integer';
    }

    if (errorMessage != undefined) {
        logger.error(errorMessage);
        res.status(500).json({ 
            error: {
                message: errorMessage
            }
        });
    }

    votes.updateVote(postId, userId, voteId)
        .then((result) => {
            logger.info(req, result);

            let voteID = result;
            console.log(voteID);
            res.status(201).json({ voteID });
        })
        .catch((error) => { 
            logger.error(req, error);
            res.status(500).json({ error });
        });
};



module.exports = {
    updateVote
};