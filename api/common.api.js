const userDetails = require('../database/users.db');
const logger = require("../utils/logger");

const getinitialinfo = (req, res) => {
    if(!isNaN(req.params.user_id)) {
        
        userDetails
            .getinitialinfo(req.params.user_id)
            .then((result) =>{
                
                logger.info(req, result);
                res.status(201).json({ result });
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