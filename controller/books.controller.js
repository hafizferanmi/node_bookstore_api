const Book = require('../model/book.model');

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
    }

}