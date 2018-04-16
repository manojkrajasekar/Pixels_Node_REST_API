const posts = require('../database/posts.db');
const votes = require('../database/votes.db');
const logger = require("../utils/logger");

const getPostsByTopic = (req, res) => {
    let topicId = req.params.topic_id;
    let userId = req.params.user_id;
    let errorMessage;
    
    // Validate the incoming request params
    if(isNaN(topicId)){
        errorMessage = "Topic Id should be an integer"
    } else if(isNaN(userId)){
        errorMessage = "User Id should be an integer"
    }

    if (errorMessage != undefined) {
        logger.error(errorMessage);
        res.status(500).json({ 
            error: {
                message: errorMessage
            }
        });

        return;
    }

    posts
        .getPostsByTopic(topicId, userId)
        .then((result) => {
                logger.info(req, result);

                let items = result;
                let meta = {
                    total: result.length
                };
                console.log(items);
                res.status(201).json({ items, meta });
            })
            .catch((error) => { 
                logger.error(req, error);
                res.status(500).json({ error });
            });
};



const getPostsByUser = (req, res) => {
    let errorMessage;
    let userId = req.params.user_id;
    let loggedInUserId = req.params.loggedin_user_id;
    
    if(isNaN(userId)){
        errorMessage = "User Id should be an integer"
    }

    if(isNaN(loggedInUserId)) {
        loggedInUserId = userId;
    }

    if(isNaN(userId)){
        errorMessage = "User Id should be an integer"
    }

    if (errorMessage != undefined) {
        logger.error(errorMessage);
        res.status(500).json({ 
            error: {
                message: errorMessage
            }
        });

        return;
    }

    posts
        .getPostsByUser(userId, loggedInUserId)
        .then((result) => {
            logger.info(result);

            let items = result;
            let meta = {
                total: result.length
            }
            res.status(201).json({ items, meta });
        })
        .catch((error) => { 
            logger.error(req, error);
            res.status(500).json({ error });
        });
}


module.exports = {
    getPostsByTopic,
    getPostsByUser
};