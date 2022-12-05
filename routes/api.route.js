var express = require('express');
var router = express.Router();

var { myRoutes } = require("../conf.js");
const { apiUserUpdate, apiUserCreate, apiUserDelete, apiAllUser } = require('../controllers/api/user.controller.js');
const { apiPostCreate, apiLastPosts } = require('../controllers/api/post.controller')
const { adminUrls, adminRoutes } = require('./config.js');

router.get('/users', apiAllUser);
router.get('/posts', apiLastPosts);
// auth routh 
router.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    // res.setHeader('Content-Type', 'text/event-stream');

    if (req.session.isSignIn) {
        res.locals.adminUrls = adminUrls;
        res.locals.userData = req.session.userData;
        res.locals.adminRoutes = adminRoutes;
        next();
    } else {
        res.redirect(myRoutes.signIn.url);
    }
})
router.post('/users', apiUserCreate);
router.put('/users', apiUserUpdate);
router.delete('/users', apiUserDelete);


router.post('/posts', apiPostCreate);
// router.put('/posts', apiPostUpdate);
// router.delete('/posts', apiPostDelete);



module.exports = router;