const votes = require('../database/votes.db');
const logger = require('../utils/logger');


// const CheckIfValidVote = (req, res) => {

//     // Validate the incoming request params
//     if((!isNaN(req.params.post_id)) && (!isNaN(req.params.user_id))) {
//         votes.CheckIfValidVote(req.params.post_id, req.params.user_id)
//             .then((result) => {
//                 logger.info(req, result);
//                 let valid_vote_id = result;
//                 if (valid_vote_id.length > 0) {
//                     console.log('already voted');
//                 }
//                 else {
//                     votes.AddVote(req.params.post_id, req.params.user_id)
//                     .then((result) => {
//                         logger.info(req, result);
//                         let voteid = result;
//                         res.status(201).json({ voteid });
//                     })
//                     .catch((error) => { 
//                         logger.error(req, error);
//                         res.status(500).json({ error });
//                     });
//                 }
//                 res.status(201).json({ valid_vote_id });
//             })
//             .catch((error) => { 
//                 logger.error(req, error);
//                 res.status(500).json({ error });
//             });
//     }
//     else {
//         const errorMessage = 'Post ID or User ID is not valid';
//         logger.error(errorMessage);
//         res.status(500).json({ 
//             error: {
//                 message: errorMessage
//             }
//         });
//     }
// };

// const AddVote = (req, res) => {
    
//     // Validate the incoming request params
//     if((!isNaN(req.params.post_id)) && (!isNaN(req.params.user_id))) {
//         votes.AddVote(req.params.post_id, req.params.user_id)
//             .then((result) => {
//                 logger.info(req, result);
//                 let voteid = result;
//                 res.status(201).json({ voteid });
//             })
//             .catch((error) => { 
//                 logger.error(req, error);
//                 res.status(500).json({ error });
//             });
//     }
//     else {
//         const errorMessage = 'Post ID or User ID is not valid';
//         logger.error(errorMessage);
//         res.status(500).json({ 
//             error: {
//                 message: errorMessage
//             }
//         });
//     }
// };

const AddValidVote = (req, res) => {
    if((!isNaN(req.params.post_id)) && (!isNaN(req.params.user_id))) {
        votes.AddValidVote(req.params.post_id, req.params.user_id)
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

module.exports = {
    AddValidVote
};