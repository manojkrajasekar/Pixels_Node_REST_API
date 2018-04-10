const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const userDetails = require("./api/common.api");
const postsAPI = require("./api/posts.api");
const votesAPI = require("./api/votes.api");
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

app.post(`/add_vote/:post_id/:user_id`, votesAPI.AddVote);
app.get(`/check_if_valid_vote/:post_id/:user_id`, votesAPI.CheckIfValidVote);



    

