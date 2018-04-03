const con = require('./connection');

getpostsbytopic = (topicid) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_posts_by_topic(?)', [topicid],  (err, result) => {
            if(err) {
               return reject(err);
            }
            resolve(result);
            //console.log(result);
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

getuserdetails = (userid) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_user_Details(?)', [userid], (err, result) =>{
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

getinitialinfo = (userid) => {
    return new Promise ((resolve, reject) => {
        con.query('CALL get_initial_info(?)', [userid], (err, result) => {
            if(err) {
                return reject(err);
            }
            resolve(result);
        });
     });
};



module.exports = {
    getpostsbytopic: getpostsbytopic,
    getpostsbyuser: getpostsbyuser,
    getvoterinfobypost: getvoterinfobypost,
    getuserdetails: getuserdetails,
    getcommentsbypost: getcommentsbypost,
    getinitialinfo: getinitialinfo
};
