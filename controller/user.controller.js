let User = require('../model/user.model');

module.exports = {

    login: function(req, res) {
        User.findOne({ username: username }, (err, user) => {
            res.json(user)
        });
    },

    join: function(req, res) {
        let user = new User(req.body);
        if (book.save()) {
            res.status(200).json({ error: false, message: 'User joined successfully' });
        } else {
            res.status(500).json({ error: true, message: 'Error Occured' });
        }
    }

}