const users = require('../database/users.db');
const utils = require("./utils");
const logger = require("../utils/logger");

const updateUserDetails = (req, res) => {

    let userId = req.body.user_id;
    let firstName = req.body.first_name;
    let lastName = req.body.last_name;
    let mailId = req.body.mail_id;

    let errorMessage;

    if(isNaN(userId)) {
        errorMessage = "User Id must be an integer"
    }

    if(errorMessage != undefined) {
        logger.error(errorMessage);
        res.status(500).json({ 
            error: {
                message: errorMessage
            }
        });
        
        return;
    }

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
    updateUserDetails
};