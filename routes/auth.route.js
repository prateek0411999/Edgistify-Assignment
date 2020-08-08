const express = require('express')
const router = express.Router()

//loading all the controllers
const {
    registerController,
    activationController,
    loginController,
    homeController1,
    homeController,
    postController

} = require('../controllers/auth.controller')

//validation..
const {validRegister, validLogin}= require('../helpers/valid');


console.log('*************');
router.post('/register',validRegister,registerController);
router.post('/activation', activationController)
router.post('/login',validLogin,loginController)
router.post('/home',homeController1)
router.get('/home',homeController);
router.post('/posting',postController);
module.exports = router