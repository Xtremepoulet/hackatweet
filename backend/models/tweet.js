const mongoose = require('mongoose');


const tweetSchema = mongoose.Schema({
    firstname: String,
    username: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    date: Date,
    token: String,
    message: String,
    likeCount: Number,
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;