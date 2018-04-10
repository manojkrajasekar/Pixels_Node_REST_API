const votes = require('../database/votes.db');
const logger = require('../utils/logger');

let valid_vote_id;

const CheckValidVote = (req, res) => {

    if((!isNaN(req.params.post_id)) && (!isNaN(req.params.user_id))) {
        votes.getCheckValidVote(req.params.post_id, req.params.user_id)
            .then((result) => {
                logger.info(req, result);
                valid_vote_id = result;
                res.status(201).json({ valid_vote_id });
            })
            .catch((error) => { 
                logger.error(req, error);
                res.status(500).json({ error });
            });
    }
    else {
        const errorMessage = 'Post ID or User ID is not a valid one';
        logger.error(errorMessage);
        res.status(500).json({ 
            error: {
                message: errorMessage
            }
        });
    }
};

const AddVote = (req, res) => {
        
    if(isNaN(valid_vote_id)) {
        if((!isNaN(req.params.post_id)) && (!isNaN(req.params.user_id))) {
            votes.postAddVote(req.params.post_id, req.params.user_id)
                .then((result) => {
                    logger.info(req, result);
                    let voteid = result;
                    res.status(201).json({ voteid });
                })
                .catch((error) => { 
                    logger.error(req, error);
                    res.status(500).json({ error });
                });
        }
        else {
            const errorMessage = 'Post ID or User ID is not valid';
            logger.error(errorMessage);
            res.status(500).json({ 
                error: {
                    message: errorMessage
                }
            });
        }
    }
};


module.exports = {
    AddVote,
    CheckValidVote
};