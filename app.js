var express = require('express');
var app = new express();
var path = require('path');
var session = require('express-session');

require('dotenv').config();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './views'));

app.use(express.urlencoded()), { extended: false };

app.use(express.static(path.join(__dirname, './public')));

// global var
app.locals.canonical = "hello";
var { myRoutes, mainNav, apiRoutes } = require("./conf.js");
app.locals.myRoutes = myRoutes;
app.locals.apiRoutes = apiRoutes;
app.locals.mainNav = mainNav;
app.locals.activeRoute = null;
app.locals.meta = {
    title: "Default Title",
    description: "This is default Description"
}
app.use(function (req, res, next) {
    app.locals.isSignIn = req.session.isSignIn;
    app.locals.userData = req.session.userData;
    next();
})



var indexRouter = require('./routes/index.route');
var adminRouter = require('./routes/admin.route');
var apiRouter = require('./routes/api.route');

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/admin', adminRouter);

app.use(function (req, res) {
    res.statusCode = 404;
    res.render(
        '404',
        {
            meta: {
                title: "Page Not Found",
                description: "this is Page Not Faund page",
            }
        }
    );
})

app.use(
    function (err, req, res, next) {
        console.log(err);
        res.send('Errorrrrrrr...r.r..r.r.')
    }
)

app.listen(process.env.APP_PORT, () => {
    console.log('Ser listening on port ', process.env.APP_PORT)
})



