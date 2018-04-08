
const express = require('express');

const userDetails = require("./api/common.api");
const postsAPI = require("./api/posts.api");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;

app.listen(port, (req, res) => {
    console.log('Running on port 8080');
});


app.get('/getinitialinfo/:user_id', userDetails.getinitialinfo);

app.get('/getpostsbytopic/:topic_id', postsAPI.getpostsbytopic);
app.get('/getpostsbyuser/:user_id', postsAPI.getpostsbyuser);



// app.get('/getuserdetails/:user_id', (req, res) => {
//     if(!isNaN(req.params.user_id)) {
//         userDetails.getuserdetails(req.params.user_id).then((result) => {
//             console.log(result);
//             res.status(201).json({
//                 result
//             });
//         }).catch((err) => { throw err; });
//     }
//     else{
//         console.log('User id not an integer');
//     }
// });

// app.get('/getvoterinfobypost/:post_id', (req, res) => {
//     if(!isNaN(req.params.post_id)) {
//         posts.getvoterinfobypost(req.params.post_id).then((result) => {
//             console.log(result);
//             res.status(201).json({
//                 result
//             });
//         }).catch((err) => { throw err; });
//     }
//     else{
//         console.log('post id is not an integer');
//     }
// });

// app.get('/getcommentsbypost/:post_id/:limit', (req, res) => {
//     if(!isNaN(req.params.post_id) && !isNaN(req.params.limit)) {
//         posts.getcommentsbypost(req.params.post_id, req.params.limit ).then((result) => {
//             console.log(result);
//             res.status(201).json({
//                 result
//             });
//         }).catch((err) => { throw err; });
//     }
//     else{
//         console.log('post id is not an integer');
//     }
// });

    

