var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("index");
});

router.get("/user/:id", function (req, res, next) {
    res.render("users", { id: req.params.id });
});

// router.get("/register", function (req, res, next) {
//     // res.send("text")
//     // res.json(req.query);
//     res.render("Profile", { user: req.query });
// });

router.post("/register", function (req, res, next) {
    const data = req.body;
    res.render("Profile", { user: data });
});

module.exports = router;
