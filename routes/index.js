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
    // res.render("index");
    // res.json(req.body);
    // res.redirect(`/file/${req.body.filename}`);
});

// router.get("/file/:filename", function (req, res, next) {
//     const filedata = fs.readFileSync(
//         `public/database/${req.params.filename}`,
//         "utf-8"
//     );
//     const files = fs.readdirSync("public/database");

//     res.render("index", { filedata: filedata, files: files });
// });

module.exports = router;
