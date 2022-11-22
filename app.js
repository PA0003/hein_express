var express = require('express');
var app = new express();
var path = require('path');
var session = require('express-session');

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
var { myRoutes, mainNav } = require("./conf.js");
app.locals.myRoutes = myRoutes;
app.locals.mainNav = mainNav;
app.locals.activeRoute = null;
app.locals.meta = {
    title: "Default Title",
    description: "This is default Description"
}
app.use(function(req,res,next){
    app.locals.isSignIn = req.session.isSignIn;
    next();
})



var indexRouter = require('./routes/index.route');
var adminRouter = require('./routes/admin.route');

app.use('/', indexRouter);
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

var port = 3001;
app.listen(port, () => {
    console.log('Ser listening on port ', port)
})



