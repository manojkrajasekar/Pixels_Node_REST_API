const con = require('./utils/connection');
const processor = require("./utils/processers");


const uploadPost = (userId, topicId, url, description, nextTopic) => {
    return new Promise((resolve, reject) => {
        con.query('SET @out = null; CALL add_post(? ,?, ?, ?, ?, @out); SELECT @out as post_id',
        [userId, topicId, url, description, nextTopic],
        processor.processPostResults(resolve, reject));
    });
}

const getPost = (postId, userId) => {
    return new Promise((resolve, reject) => {
        con.query('CALL get_post(?, ?)', [postId, userId], processor.processResults(resolve, reject));
    });
};

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

const getBestPost = (topicId) => {
    return new Promise((resolve, reject) => {
        con.query('CALL get_best_post(?)', [topicId], processor.processResults(resolve, reject));
    });
}

module.exports = {
    getPost,
    getPostsByTopic,
    getPostsByUser,
    getBestPost,
    uploadPost
};