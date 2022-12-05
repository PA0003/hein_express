const { Users, UserCreate, UserUpdate, UserDelete } = require("../../models/user.model")

exports.apiAllUser = function (req, res) {
    Users((err, data) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(data)
        }
    })
}
exports.apiUserCreate = function (req, res) {
    UserCreate(req.body, (err, data) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json(data)
        }
    })
}
exports.apiUserUpdate = function (req, res) {
    UserUpdate(req.body,(err,data)=>{
        if (err) {
            res.json(err);
        } else {
            res.json(data)
        }
    })
}
exports.apiUserDelete = function (req, res) {
    UserDelete(req.body,(err,data)=>{
        if (err) {
            res.json(err);
        } else {
            res.json(data)
        }
    })
}