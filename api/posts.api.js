const posts = require('../database/posts.db');
const logger = require("../utils/logger");

const getPostsByTopic = (req, res) => {
    
    // Validate the incoming request params
    if(!isNaN(req.params.topic_id)) {
    
        posts
            .getPostsByTopic(req.params.topic_id)
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
    }
    else{
        const errorMessage = 'Topic ID is not an integer';
        logger.error(errorMessage);
        res.status(500).json({ 
            error: {
                message: errorMessage
            }
        });
    }
}


const getPostsByUser = (req, res) => {
    if(!isNaN(req.params.user_id)) {
        
        posts
            .getPostsByUser(req.params.user_id)
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
    else {
        const errorMessage = 'User ID is not an integer';
        logger.error(errorMessage);
        res.status(500).json({ 
            error: {
                message: errorMessage
            }
        });
    }
}


module.exports = {
    getPostsByTopic,
    getPostsByUser
};