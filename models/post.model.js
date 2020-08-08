const mongoose = require('mongoose');
const postSchema= new mongoose.Schema({

    post: String,
    posterEmail: String,
    timeStamp: Date,
    Comments: [{
        by: String,
        comment: String,
    }]


})
module.exports = mongoose.model('post', postSchema);