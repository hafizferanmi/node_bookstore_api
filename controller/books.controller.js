let Book = require('../model/book.model');
let multer = require('multer');
let path = require('path');



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage }).single('book_file');


// router.param('id', function(req, res, next, id) {
//     console.log('An id value is being initiated');
//     next();
// });

module.exports = {

    getAllBooks: function(req, res) {
        Book.find({}, (err, books) => {
            res.json(books)
        });
    },


    getSingleBook: function(req, res) {
        Book.findById(req.params.id, (err, book) => {
            res.json(book)
        })
    },

    addBook: function(req, res) {
        // console.log(req.body);
        let book = new Book(req.body);
        if (book.save()) {
            res.status(200).json({ error: false, message: 'Book added successfully' });
        } else {
            res.status(500).json({ error: true, message: 'Error Occured' });
        }

    },

    updateBook: function(req, res) {
        var id = req.params.id;

        Book.findOneAndUpdate({ _id: id }, req.body, function(err, book) {

            if (err) {
                res.status(500).json({ error: true, message: 'Error Occured' });
                // console.log(err);
            } else {
                res.status(200).json({ error: false, message: 'Modified successfully' });
                // console.log('no erro');
            }


        });
    },

    deleteBook: function(req, res) {
        var id = req.params.id;

        Book.findOneAndRemove({ _id: id }, function(err) {
            if (err) {
                res.status(500).json({ error: true, message: 'Error Occured' });
                // console.log(err);
            } else {
                res.status(200).json({ error: false, message: 'Deleted successfully' });
                // console.log('no erro');
            }
        });
    },

    uploadBook: function(req, res) {
        upload(req, res, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(req.file);
                res.json({ error: false, message: 'File uploaded successfully' });
            }
        })
    },

    a: function(req, res){
        res.json({error: false, message: 'Test'});
    }

}