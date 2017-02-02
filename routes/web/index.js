var express = require('express');
var router = express.Router();
var signup = require('./signup');
var login = require('./login');
var afterlogin = require('./afterlogin');
var mymiddleware = require('../../middlewares');


/* GET home page. */
router.get('/', signup.get );
router.post('/', signup.post);

router.get('/login',  login.get);
router.post('/check', login.post);

router.get('/afterlogin',mymiddleware.saurabh, afterlogin.get);

router.post('/logout', afterlogin.out);

// router.all('/logout', function (req, res) {
//   req.session.destroy();                          // THIS IS ALSO WORKING FOR LOGOUT
//   res.redirect('/');
// })

module.exports = router;
