var mongoose = require('mongoose');
var multer = require('multer');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var apiRoutes = require("./route/book.route");
var app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 5000;
var router = express.Router();
mongoose.connect('mongodb://localhost/book');


router.get('/', function(req, res) {
    res.json('Welcome to the book api of a thing');
});



app.use('/', router);
app.use('/api', apiRoutes)

app.listen(port, function(err) {
    console.log('Running my port: ' + port);
})