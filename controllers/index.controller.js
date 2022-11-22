const { myRoutes } = require("../conf")

exports.pageHome =function (req, res) {
    res.render(
        'home',
        {
            data: {},
            activeRoute: myRoutes.home,
            meta: {
                title: "Home",
                description: "This is home",
                canonical: myRoutes.home.url
            }
        }
    )
}