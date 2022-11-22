
exports.adminRoutes =
{
    home: {
        label: "Admin",
        url: "/admin"
    },
    users: {
        label: "User Manager",
        url: "/admin/users"
    }
}
exports.adminUrls = [
    this.adminRoutes.home,
    this.adminRoutes.users,
]
