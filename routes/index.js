var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("index");
});

router.get("/user/:id", function (req, res, next) {
    res.render("users", { id: req.params.id });
});

router.get("/register", function (req, res, next) {
    // res.send("text")
    res.json(req.query);
});

module.exports = router;
