const express = require('express')
const router = express.Router()

//loading all the controllers
const {
    registerController,
    activationController,
    loginController,
    homeController

} = require('../controllers/auth.controller')

//validation..
const {validRegister, validLogin}= require('../helpers/valid');


console.log('*************');
router.post('/register',validRegister,registerController);
router.post('/activation', activationController)
router.post('/login',validLogin,loginController)
router.post('/home',homeController)
module.exports = router