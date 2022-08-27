const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controller');

router.get('/auth/user', userController.getLoggedUser);
router.get('/user', userController.getUser);
router.post('/auth/register', userController.register);
router.post('/auth/login', userController.login);

module.exports = router;
