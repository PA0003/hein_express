var express = require('express');
var router = express.Router();

var { myRoutes } = require("../conf.js");
const { pageAdminHome } = require('../controllers/admin.controller.js');
const { pageAdminUser, userCreate, userUpdate } = require('../controllers/adminUser.controller.js');
const { adminUrls, adminRoutes } = require('./config.js');

router.use(function (req, res, next) {
    if (req.session.isSignIn) {
        res.locals.adminUrls = adminUrls;
        res.locals.userData = req.session.userData;
        res.locals.adminRoutes = adminRoutes;
        next();
    } else {
        res.redirect(myRoutes.signIn.url);
    }
})
router.get('/', pageAdminHome);
router.get('/users', pageAdminUser);
module.exports = router;