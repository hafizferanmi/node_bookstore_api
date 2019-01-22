let router = require('express').Router();
let Book = require('../model/book.model');
let userController = require('../controller/user.controller');


router.get('/', userController.user);
router.get('/:id', userController.user);
router.get('/login', userController.login);
router.get('/join', userController.join);

module.exports = router;