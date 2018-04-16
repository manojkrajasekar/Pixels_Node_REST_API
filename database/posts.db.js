const con = require('./utils/connection');
const processor = require("./utils/processers");

const getPostsByTopic = (topicId, userId) => {
    return new Promise((resolve, reject) => {
        con.query('CALL get_posts_by_topic(?, ?)', [topicId, userId], processor.processResults(resolve, reject));
    });
};

const getPostsByUser = (userId, loggedInUserId) => {
    return new Promise((resolve, reject) => {
        con.query('CALL get_posts_by_user(?, ?)', [userId, loggedInUserId], processor.processResults(resolve, reject));
    });
};

module.exports = {
    getPostsByTopic,
    getPostsByUser
};