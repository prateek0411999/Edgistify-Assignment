const express = require('express')
const router = express.Router()

//loading all the controllers
const {
    registerController,
    activationController,
    loginController,

} = require('../controllers/auth.controller')

console.log('*************');
router.post('/register',registerController);
router.post('/activation', activationController)
router.post('/login',loginController)
module.exports = router