let router = require('express').Router();
let Book = require('../model/book.model');
let multer = require('multer');
let bookController = require('../controller/books.controller');


router.post('/', function(req, res) {
    // console.log(req);
    res.json({
        status: true,
        message: 'DraftJs',
        content: req.body
    });
});


router.get('/all_books', bookController.getAllBooks);
router.get('/:id', bookController.getSingleBook);
router.delete('/:id', bookController.deleteBook);
router.post('/modify/:id', bookController.updateBook);
router.post('/add_book', bookController.addBook);
router.post('/upload', bookController.uploadBook);
router.get('/testing', bookController.a);



module.exports = router;