const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const commonAPI = require("./api/common.api");
const postsAPI = require("./api/posts.api");
const votesAPI = require("./api/votes.api");
const usersAPI = require("./api/users.api");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cors());

app.listen(port, (req, res) => console.log('Running on port 8080'));

// Common API End points
app.get(`/get_initial_info/:user_id`, commonAPI.getInitialInfo);

// Posts API End points
app.get(`/get_post/:post_id/:loggedin_user_id`, postsAPI.getPost);
app.get(`/get_posts_by_topic/:topic_id/:user_id`, postsAPI.getPostsByTopic);
app.get(`/get_posts_by_user/:user_id/:loggedin_user_id`, postsAPI.getPostsByUser);
app.get(`/get_posts_by_user/:user_id`, postsAPI.getPostsByUser);

// Votes API End points
app.put(`/update_vote`, votesAPI.updateVote);

// Users API End points
app.put(`/update_user`, usersAPI.updateUserDetails);





    

