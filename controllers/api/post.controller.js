const { PostCreate, Posts } = require("../../models/post.model")
exports.apiPostCreate = function (req, res) {
    var userData = req.session.userData;
    var thePost = Object.assign({ user_id: userData.id }, req.body)
    PostCreate(thePost, (err, data) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json(data)
        }
    })
}
exports.apiLastPosts = function (req, res) {
    Posts((err, data) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json(data)
        }
    })
}