var express = require('express');
var router = express.Router();
var { myRoutes } = require("../conf.js");
const { pageHome } = require('../controllers/index.controller.js');
const { pageSignIn, postSignin, postSignOut } = require('../controllers/auth.controller.js');

router.get(myRoutes.home.url, pageHome)
router.get(myRoutes.signIn.url, pageSignIn)
router.post(myRoutes.signIn.url, postSignin)
router.post(myRoutes.signOut.url, postSignOut)

module.exports = router;