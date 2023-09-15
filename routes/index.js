var express = require("express");
var router = express.Router();
const fs = require("fs");

router.get("/", function (req, res, next) {
    const files = fs.readdirSync("public/database");
    res.render("index", { files: files });
});

router.post("/create", function (req, res, next) {
    fs.writeFileSync(`public/database/${req.body.filename}`, "");
    res.redirect("/");
});

router.get("/delete/:filename", function (req, res, next) {
    fs.unlinkSync(`public/database/${req.params.filename}`);
    res.redirect("/");
});

module.exports = router;
