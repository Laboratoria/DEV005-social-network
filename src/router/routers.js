export default  {
    404: {
        template: "/templates/404.html",
        title: "404",
    },
    "/": {
        template: "/templates/login/login.html",
        title: "Mascoteando",
        js: [
            "/templates/login/login.js",
        ]
    },
    "/home": {
        template: "/templates/home/home.html",
        title: "Mascoteando - Home",
        js: [
            "/templates/home/home.js",
            "/templates/home/loing.js",
        ]
    },
};
  