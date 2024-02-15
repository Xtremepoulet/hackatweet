require('../models/connection');
const User = require('../models/users');
const Tweet = require('../models/tweet');


// Create city with name, population and country foreign key
function createTweet(firstname, usernameId, date, message, likeCount) {
    const newTweet = new Tweet({
        firstname: firstname,
        username: usernameId,
        date: date,
        message: message,
        likeCount: likeCount,                                       
    });

    newTweet.save().then(() => {

        Tweet.find().then(tweet => {
            console.log(tweet);
        });

    });
}
module.exports = { createTweet }; // Do not edit/remove this line

router.get('/profile', authMiddleware, (req, res) => {
    const username = req.users.username;
});


router.post('/tweet', (req, res) => {
    if (req.body.message <= 0) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    } else if (req.body.message >= 280) {
        res.json({ result: false, error: 'fields has more than the 280 character required' });
        return;
    }

    // Check if the user has not already been registered
    User.findOne({ username: req.body.username }).then(user => {
        if (!user) {
            const hash = bcrypt.hashSync(req.body.password, 10);
            const token = uid2(32)
            const newUser = new User({
                firstname: req.body.firstname,
                username: req.body.username,
                password: hash,
                token,

            });

            newUser.save().then(newDoc => {
                res.json({ result: true, token: newDoc.token });
            });
        } else {
            // User already exists in database
            res.json({ result: false, error: 'User already exists' });
        }
    });
});
router.post('/signin', (req, res) => {
    if (!checkBody(req.body, ['username', 'password'])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }

    User.findOne({ username: req.users.username }).then(user => {
        if (user && bcrypt.compareSync(req.users.password, user.password)) {
            res.json({ result: true, token: user.token });
        } else {
            res.json({ result: false, error: 'User not found or wrong password' });
        }
    });
});


module.exports = router;
