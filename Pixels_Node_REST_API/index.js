const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rajasekar*1',
    port:3306,
});

con.connect((err) => {
       if (err) throw err;
       console.log("Connected!");
// //      // con.query('CREATE DATABASE NODEDEMO', function(err, result){
// //     //     if(err) throw err;
// //     //     console.log('Database Created');
// //     // });
  });

 const port = 8080;
 app.listen(port);

 console.log('port running on 8080');

    con.query('USE sample_photoapp;', (err, result) => {
         if (err) throw err;
         console.log('Using the sample_photoapp database');
     });

 app.get('/', (req, res) => {
     res.status(201).json({
         message:'This is Cool'
     });
 });

 app.get('/getallposts', (req, res) => {
     con.query('CALL Display_Posts()', (err, result) => {
         if (err) throw err;
          //console.log('Called SPS');
         console.log(result);
         res.status(201).json({
             message: result
         });
     });
 });


 app.get('/getpostsbyid/:id', (req, res) => {
    con.query('CALL Get_Posts_By_id(?)', [req.params.id],  (err, result) => {
        if(err) throw err;
        console.log(result);
        res.status(201).json({
            result
        });
    });
});


module.exports = con;