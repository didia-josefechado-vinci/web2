var express = require('express');
const { path } = require('../../exercice_1.1/app');
var router = express.Router();

/* GET home page. */
router.use((req, res, next) => {
  console.log('GET / :', path);
  next();
});

router.get('/',(req,res,next) => {
  return res.json();
});




module.exports = router;
