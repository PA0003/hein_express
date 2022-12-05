const { myRoutes } = require("../conf")

exports.pageAdminUser = function (req, res) {

    res.render(
        'admin/user',
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