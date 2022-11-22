const { myRoutes } = require("../conf")
const { Users } = require("../models/user.model")

exports.pageAdminHome = function (req, res) {

    res.render(
        'admin/index',
        {

            activeRoute: myRoutes.admin,
            meta: {
                title: "Admin",
                description: "This is Admin page",
                canonical: myRoutes.admin.url
            }
        }
    )
}