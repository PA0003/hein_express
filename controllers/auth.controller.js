const { myRoutes } = require("../conf");
const { findUserByUP } = require("../models/user.model");

exports.pageSignIn = function (req, res) {
    if (!req.session.isSignIn) {
        res.render(
            "signIn",
            {
                error: null,
                inputData: {},
                activeRoute: myRoutes.signIn,
                meta: {
                    title: "Sign In",
                    description: "please sign in to your account"
                }
            }
        )
    } else {
        res.redirect(myRoutes.admin.url);
    }
}

exports.postSignin = (req, res) => {
    findUserByUP(req.body, (err, data) => {
        if (err) {
            res.render(
                "signIn",
                {
                    error: err,
                    inputData: req.body,
                    meta: {
                        title: "Sign In",
                        description: "please sign in to your account"
                    }
                }
            );
        } else {
            req.session.isSignIn = true;
            req.session.userData = data;
            req.session.save(() => {
                res.redirect(myRoutes.admin.url);
            });
        }
    });

}

exports.postSignOut = (req, res) => {
    //make logout and
    req.session.isSignIn = false;
    req.session.save(() => {
        res.redirect(myRoutes.home.url);
    });
}