const { myRoutes } = require("../conf")
const { Users, UserCreate, UserUpdate } = require("../models/user.model")
const { adminRoutes } = require("../routes/config")

exports.pageAdminUser = function (req, res) {
    Users((err,data)=>{
        if(err){
            //error
        }
        else{
            res.render(
                'admin/user',
                {
                    users: data,
                    activeRoute: myRoutes.admin,
                    meta: {
                        title: "Admin",
                        description: "This is Admin page",
                        canonical: myRoutes.admin.url
                    }
                }
            )
        }
    })
}
exports.userCreate = function (req,res){

    UserCreate(req.body,(err,data)=>{
        if(err){
            res.send(err);
        }else{
            res.redirect(adminRoutes.users.url);
        }
    })
}
exports.userUpdate = function (req,res){

    UserUpdate(req.body,(err,data)=>{
        if(err){
            res.send(err);
        }else{
            res.redirect(adminRoutes.users.url);
        }
    })
}