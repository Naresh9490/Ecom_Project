const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

// Routes for user registration and login
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/getdata',userController.getAlluses)

module.exports = router;
