require('../models/connection');
var express = require('express');
var router = express.Router();
const User = require('../models/users');
const Tweet = require('../models/tweet');



router.post('/new', (req, res) => {
    if (!req.body.message) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    } else if (req.body.message.length >= 280) {
        res.json({ result: false, error: 'fields has more than the 280 character required' });
        return;
    }

    // Check if the user has not already been registered
    User.findOne({ username: req.body.username }).then(user => {
        if (!user) {
            res.json({ result: false, error: "User not found" })
        } else {
            // User already exists in database
            const newTweet = new Tweet({
                user: user._id,
                date: new Date(),
                message: req.body.message,
                likeCount: 0,
            })

            newTweet.save().then(() => {
                res.json({ result: true, error: 'Tweet created' });

            })
        }
    });
});


module.exports = router;