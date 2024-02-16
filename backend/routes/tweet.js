require('../models/connection');
var express = require('express');
var router = express.Router();
const User = require('../models/users');
const Tweet = require('../models/tweet');
const Hashtag = require('../models/hashtag');
const { hash } = require('bcrypt');




router.post('/new',async (req, res) => {
    if (!req.body.message) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    } else if (req.body.message.length >= 280) {
        res.json({ result: false, error: 'fields has more than the 280 character required' });
        return;
    }

    // Check if the user has not already been registered
    User.findOne({ $and: [{ firstname: req.body.firstname }, { username: req.body.username }] }).then(user => {
        if (!user) {
            res.json({ result: false, error: "User not found" })
        } else {
            // User already exists in database
            const newTweet = new Tweet({
                firstname: req.body.firstname,
                username: req.body.username,
                user: user._id,
                date: new Date(),
                token: req.body.token,
                message: req.body.message,
                likeCount: 0,
            })

            newTweet.save().then(() => {
                res.json({ result: true, message: 'Tweet created' });

            })
        }
    });
});


router.get('/all_tweet', async (req, res, next) => {

    Tweet.find().then(tweet => {
        if (!tweet) {
            res.json({ result: false })
            return;
        } else {
            res.json({ result: true, tweet })
        }
    })
})



router.post('/delete_tweet', (req, res, next)  => {

    const {username, firstname, message, token} = req.body;

        Tweet.deleteOne({ $and: [{username: username}, {firstname: firstname}, {message: message}, {token: token}]}).then(data => {
            if(data.deletedCount > 0){
                res.json({result: true, message: 'tweet deleted'});
            }else {
                res.json({result: false})
            }
        })
})




module.exports = router;