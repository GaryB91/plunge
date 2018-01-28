const express = require("express"),
    nunjucks = require("nunjucks"),
    path = require("path"),
    app = express(),
    port = 3000;


app.use("/static", express.static(path.join(__dirname, "static")));

nunjucks.configure({
    autoescape: true,
    express: app
});

app.set("view engine", "njk");

app.get("/", (req, res) => {
    return res.render("index");
});

app.listen(port, err => {
    if (err) {
        console.error(err);
    }

    console.log("We're live on port: %s", port);
});
