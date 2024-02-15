const mongoose = require('mongoose');


const tweetSchema = mongoose.Schema({
    firstname: String,
    username: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    date: Date,
    message: String,
    likeCount: Number,
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;

