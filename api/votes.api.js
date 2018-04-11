const votes = require('../database/votes.db');
const logger = require('../utils/logger');

const AddVote = (req, res) => {
    if((!isNaN(req.params.post_id)) && (!isNaN(req.params.user_id))) {
        votes.AddVote(req.params.post_id, req.params.user_id)
            .then((result) => {
                logger.info(req, result);
                let vote_id = result;
                res.status(201).json({ vote_id });
            })
            .catch((error) => { 
                logger.error(req, error);
                res.status(500).json({ error });
            });
    }
    else {
        const errorMessage = 'Post ID or User ID is an integer';
        logger.error(errorMessage);
        res.status(500).json({ 
            error: {
                message: errorMessage
            }
        });
    }
};


const getVoteCount = (req, res) => {
    if(!isNaN(req.params.post_id)) {
        votes.getVoteCount(req.params.post_id)
            .then((result) => {
                logger.info(req, result);
                let vote_count = result;
                res.status(201).json({ vote_count });
            })
            .catch((error) => { 
                logger.error(req, error);
                res.status(500).json({ error });
            });
    }
    else {
        const errorMessage = 'Post ID or User ID is an integer';
        logger.error(errorMessage);
        res.status(500).json({ 
            error: {
                message: errorMessage
            }
        });
    }
};

module.exports = {
    AddVote,
    getVoteCount
};