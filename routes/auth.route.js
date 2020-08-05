const express = require('express')
const router = express.Router()

//loading all the controllers
const {
    registerController
} = require('../controllers/auth.controller')

console.log('*************');
router.post('/register',registerController)

module.exports = router