const users = require('../database/users.db');
const topics = require("../database/topics.db");
const utils = require("./utils");

const logger = require("../utils/logger");

const getinitialinfo = (req, res) => {
    if(!isNaN(req.params.user_id)) {
        
        Promise.all([
            users.getuserdetails(req.params.user_id),
            topics.getTopics(true, 1)
        ])
            .then((results) =>{
                let loggedInUserDetails = results[0];
                let currentTopic = results[1];

                loggedInUserDetails = utils.arrayFirstElementToObject(loggedInUserDetails);
                currentTopic = utils.arrayFirstElementToObject(currentTopic);

                logger.info(req, { loggedInUserDetails, currentTopic });
                res.status(201).json({ loggedInUserDetails, currentTopic });
            })
            .catch((error) => {
                logger.error(req, error);
                res.status(500).json({ error });
            });
    }
    else{
        logger.error('User ID is not an integer');
    }
}

module.exports = { 
    getinitialinfo
};