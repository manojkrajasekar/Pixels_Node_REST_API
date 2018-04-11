const con = require('./utils/connection');
const processor = require("./utils/processers");

const getPostsByTopic = (topicid) => {
    return new Promise((resolve, reject) => {
        con.query('CALL get_posts_by_topic(?)', [topicid], processor.processResults(resolve, reject));
    });
};

const getPostsByUser = (userid) => {
    return new Promise((resolve, reject) => {
        con.query('CALL get_posts_by_user(?)', [userid], processor.processResults(resolve, reject));
    });
};

// const getvoterinfobypost = (postid) => {
//     return new Promise((resolve, reject) => {
//         con.query('CALL get_voter_info_by_post(?)', [postid], processor.processResults(resolve, reject));
//     });
// };

// const getcommentsbypost = (postid, limit) => {
//     return new Promise ((resolve, reject) => {
//         con.query('CALL get_comments(?, ?)', [postid, limit], processor.processResults(resolve, reject));
//      });
// };

module.exports = {
    getPostsByTopic,
    getPostsByUser
    // getvoterinfobypost,
    // getcommentsbypost
};