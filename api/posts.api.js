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
                res.status(201).json({ items, meta });
            })
            .catch((error) => { 
                logger.error(req, error);
                res.status(500).json({ error });
            });
    }
    else{
        logger.info('topic is not an integer');
    }
}


const getpostsbyuser = (req, res) => {
    if(!isNaN(req.params.user_id)) {
        
        posts
            .getpostsbyuser(req.params.user_id)
            .then((result) => {
                
                logger.info(result);
                res.status(201).json({ result });
            })
            .catch((error) => { 
                logger.error(req, error);
                res.status(500).json({ error });
            });
    }
    else {
        console.log('user id is not a integer');
    }
}


module.exports = {
    getPostsByTopic,
    getpostsbyuser
};