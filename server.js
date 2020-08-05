const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')


// Config dotev
require('dotenv').config({
    path: './config/config.env'
})


const app = express()

// Connect to database
connectDB();
app.use(bodyParser.json())


// Load routes
const authRouter = require('./routes/auth.route')
//const userRouter = require('./routes/user.route')

// Dev Logging Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    //Morgan gives us the information about each request
    app.use(morgan('dev'))
}

// Routing
app.use('/api', authRouter)
//app.use('/api', userRouter)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not Found"
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});