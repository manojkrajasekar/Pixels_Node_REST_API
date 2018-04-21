const con = require('./utils/connection');
const processor = require("./utils/processers");

const getTopics = (isCurrent, limit) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_topic(?, ?)', [isCurrent, limit],  processor.processResults(resolve, reject));
    });
};

module.exports = { getTopics };