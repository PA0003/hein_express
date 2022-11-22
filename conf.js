exports.myRoutes = {
    home: {
        label: "Home",
        url: "/"
    },
    admin: {
        label: "Admin",
        url: "/admin"
    },
    signIn: {
        label: "Sign In",
        url:"/sign-in"
    },
    signOut: {
        label: "Sign Out",
        url:"/sign-out"
    },
    pnf: {
        label: "404",
        url:"/404"
    }
}

exports.mainNav= [
    this.myRoutes.home,
    this.myRoutes.pnf
];