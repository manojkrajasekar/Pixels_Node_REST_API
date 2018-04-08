const con = require('./utils/connection');

getpostsbytopic = (topicid) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_posts_by_topic(?)', [topicid],  (err, result) => {
            if(err) {
               return reject(err);
            }
            resolve(result);
        });
    });
};

getpostsbyuser = (userid) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_posts_by_user(?)', [userid], (err, result) => {
            if(err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

getvoterinfobypost = (postid) => {
    return new Promise((resolve, reject) => {
        con.query('CALL get_voter_info_by_post(?)', [postid], (err, result) => {
            if(err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

getcommentsbypost = (postid, limit) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_comments(?, ?)', [postid, limit], (err, result) => {
            if(err) {
                return reject(err);
            }
            resolve(result);
        });
     });
};


module.exports = {
    getpostsbytopic,
    getpostsbyuser,
    getvoterinfobypost,
    getcommentsbypost
};


