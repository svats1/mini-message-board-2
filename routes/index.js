var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages: messages });
});

/* New page */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

// POST new message router
router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    date: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
