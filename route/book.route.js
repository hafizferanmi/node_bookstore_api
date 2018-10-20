let router = require('express').Router();
let Book = require('../model/book.model');
let multer = require('multer');
let bookController = require('../controller/books.controller');


router.get('/', function(req, res) {
    res.json({
        status: true,
        message: 'Welcome to the book API!'
    });
});


router.get('/all_books', bookController.getAllBooks);
router.get('/:id', bookController.getSingleBook);
router.get('/delete/:id', bookController.deleteBook);
router.post('/modify/:id', bookController.updateBook);
router.post('/add_book', bookController.addBook);




module.exports = router;