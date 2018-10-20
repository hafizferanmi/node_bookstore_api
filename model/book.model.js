var mongoose = require('mongoose');


const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: { type: String, require: true },
    author: { type: String, require: true },
    category: { type: String, require: true },
    description: { type: String, require: true },
    created_at: Date,
    updated_at: Date
})

// on every save, add the date
bookSchema.pre('save', function(next) {
    var currentDate = new Date();

    if (!this.created_at)
        this.created_at = currentDate;

    next();
});


module.exports = mongoose.model('books', bookSchema);