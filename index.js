const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const userDetails = require("./api/common.api");
const postsAPI = require("./api/posts.api");
const api = require("./configs/api.config");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, (req, res) => console.log('Running on port 8080'));

app.get(`/get_initial_info/:user_id`, userDetails.getInitialInfo);

app.get(`/get_posts_by_topic/:topic_id`, postsAPI.getPostsByTopic);
app.get(`/get_posts_by_user/:user_id`, postsAPI.getPostsByUser);



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

    

