const express = require('express');
const app = express();
const con = require('./connection');
const cloudinary = require('cloudinary');
const posts = require('./posts');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8080;
app.listen(process.env.PORT || port, () => {
    console.log('Working fine');
});

cloudinary.config({
    cloud_name:'pixelsapp',
    api_key: '921914376421383',
    api_secret: 'Kcsx9wMBbZVG8O-raoth2N76ByM'
});

    console.log('port running on 8080');

    con.query('USE photoapp;', (err, result) => {
         if (err) throw err;
         console.log('Using the photoapp database');
     });

     app.use(express.static('public'))

     app.get('/', () => {
         res.render('public');
     });

     // /https://pixels-heroku-node-api.herokuapp.com/getpostsbytopic/
    app.get('/getpostsbytopic/:topic_id', (req, res) => {
        if(!isNaN(req.params.topic_id)) {
            posts.getpostsbytopic(req.params.topic_id).then((result) => {
                console.log(result);
                res.status(201).json({
                    result
                });
            }).catch((err) => { throw err; });
        }
        else{
            console.log('Not null failed');
        }
    });

    app.get('/getpostsbyuser/:user_id', (req, res) => {
        if(!isNaN(req.params.user_id)) {
            posts.getpostsbyuser(req.params.user_id).then((result) => {
                console.log(result);
                res.status(201).json({
                    result
                });
            }).catch((err) => { throw err; });
        }
        else {
            console.log('user id is not a number');
        }
    });

    app.get('/getinitialinfo/:user_id', (req, res) => {
        if(!isNaN(req.params.user_id)) {
            posts.getinitialinfo(req.params.user_id).then((result) =>{
                console.log(result);
                res.status(201).json({
                    result
                });
            }).catch((err) => { throw err; });
        }
        else{
            console.log('Not null failed');
        }
    });

    app.get('/getuserdetails/:user_id', (req, res) => {
        if(!isNaN(req.params.user_id)) {
            posts.getuserdetails(req.params.user_id).then((result) => {
                console.log(result);
                res.status(201).json({
                    result
                });
            }).catch((err) => { throw err; });
        }
        else{
            console.log('User id must be an integer');
        }
    });

    app.get('/getvoterinfobypost/:post_id', (req, res) => {
        if(!isNaN(req.params.post_id)) {
            posts.getvoterinfobypost(req.params.post_id).then((result) => {
                console.log(result);
                res.status(201).json({
                    result
                });
            }).catch((err) => { throw err; });
        }
        else{
            console.log('post id must be an integer');
        }
    });

    app.get('/getcommentsbypost/:post_id/:limit', (req, res) => {
        if(!isNaN(req.params.post_id) && !isNaN(req.params.limit)) {
            posts.getcommentsbypost(req.params.post_id, req.params.limit ).then((result) => {
                console.log(result);
                res.status(201).json({
                    result
                });
            }).catch((err) => { throw err; });
        }
        else{
            console.log('post id must be an integer');
        }
    });

    

