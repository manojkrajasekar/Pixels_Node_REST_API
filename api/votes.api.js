const votes = require('../database/votes.db');
const logger = require('../utils/logger');

const UpdateVote = (req, res) => {
    let postId = req.body.post_id;
    let userId = req.body.user_id;
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

    votes
        .UpdateVote(postId, userId)
        .then((result) => {
            logger.info(req, result);
            let vote_id = result;
            res.status(201).json({ vote_id });
        })
        .catch((error) => { 
            logger.error(req, error);
            res.status(500).json({ error });
        });
};


// const getVoteCount = (req, res) => {
//     if(!isNaN(req.params.post_id)) {
//         votes.getVoteCount(req.params.post_id)
//             .then((result) => {
//                 logger.info(req, result);
//                 let vote_count = result;
//                 res.status(201).json({ vote_count });
//             })
//             .catch((error) => { 
//                 logger.error(req, error);
//                 res.status(500).json({ error });
//             });
//     }
//     else {
//         const errorMessage = 'Post ID or User ID is an integer';
//         logger.error(errorMessage);
//         res.status(500).json({ 
//             error: {
//                 message: errorMessage
//             }
//         });
//     }
// };

module.exports = {
    UpdateVote
    // getVoteCount
};