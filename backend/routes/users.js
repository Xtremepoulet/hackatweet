var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hello', (req, res, next) => {
  res.json({ result: true });
})

module.exports = router;
