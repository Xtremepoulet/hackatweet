var express = require('express');
var router = express.Router();

require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody.js');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {
  if (!checkBody(req.body, ['username', 'password', 'firstname'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }
  
  // Check if the user has not already been registered
  //i need to compare password hash to see if he already is in the database
  User.findOne({username: req.body.username}).then(user => {
    if (!user) {
      const hash = bcrypt.hashSync(req.body.password, 10);
      const token = uid2(32)
      const newUser = new User({
        firstname: req.body.firstname,
        username: req.body.username,
        password: hash,
        token,
      });

      newUser.save().then(user_data => {
        res.json({ result: true, user_data });
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

  User.findOne({ username: req.body.username }).then(user => {
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      res.json({ result: true, user });
    } else {
      res.json({ result: false, error: 'User not found or wrong password' });
    }
  });
});




router.get('/isConnected/:token', (req, res) => {

  User.findOne({ token: req.params.token }).then(data => {
    if (data) {
      res.json({ result: true, user: data.username });
    } else {
      res.json({ result: false, error: 'User not found' });
    }
  });
});

module.exports = router;