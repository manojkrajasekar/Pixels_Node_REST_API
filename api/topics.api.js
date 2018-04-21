const topics = require('../database/topics.db');
const logger = require("../utils/logger");
const utils = require("./utils");

getTopic = (req, res) => {
    let topicId = req.params.topic_id;
    let limit = req.params.limit;
    let errorMessage;
    
    // Validate the incoming request params
    if(isNaN(topicId)){
        errorMessage = "Topic Id should be an integer"
    } 
    else if(isNaN(limit)){
        errorMessage = "limit should be an integer"
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

    topics
        .getTopic(topicId, limit)
        .then((result) => {
                logger.info(req, result);

                currentTopicInfo = utils.arrayFirstElementToObject(result);
                res.status(201).json({currentTopicInfo});
            })
            .catch((error) => { 
                logger.error(req, error);
                res.status(500).json({ error });
            });
} 


module.exports = {
    getTopic
};