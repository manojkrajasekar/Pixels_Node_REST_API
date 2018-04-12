const users = require('../database/users.db');
const topics = require("../database/topics.db");
const utils = require("./utils");

const logger = require("../utils/logger");

const getInitialInfo = (req, res) => {
    if(!isNaN(req.params.user_id)) {
        
        Promise.all([
            users.getUserDetails(req.params.user_id),
            topics.getTopics(true, 1)
        ])
            .then((results) => {
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
        const errorMessage = 'User ID is not an number';
        logger.error(errorMessage);
        res.status(500).json({ 
            error: {
                message: errorMessage
            }
        });
    }
}

const updateUserDetails = (req, res) => {
    let userId = req.body.user_id;
    let firstName = req.body.first_name;
    let lastName = req.body.last_name;
    let mailId = req.body.mail_id;

    // let errorMessage;

    // if(isNaN(req.params.userId)) {
    //     errorMessage = "User Id must be an integer"
    // }

    // if(errorMessage != undefined) {
    //     logger.error(errorMessage);
    //     res.status(500).json({ 
    //         error: {
    //             message: errorMessage
    //         }
    //     });
    // }

    users
        .updateUserDetails(userId, firstName, lastName, mailId)
        .then((result) => {
            logger.info(req, result);
            
            res.status(201).json({ result });
        })
        .catch((error) => { 
            logger.error(req, error);
            res.status(500).json({ error });
        });
}

module.exports = { 
    getInitialInfo,
    updateUserDetails
};