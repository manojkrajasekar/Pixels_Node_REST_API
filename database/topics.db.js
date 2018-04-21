const con = require('./utils/connection');
const processor = require("./utils/processers");

const getTopic = (isCurrent, limit) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_topic_info(?, ?)', [isCurrent, limit],  processor.processResults(resolve, reject));
    });
};

module.exports = { getTopic };