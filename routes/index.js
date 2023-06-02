var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Home page nigga!");
});

router.post("/", (req, res) => {
  // console.log(req.body);
  const { phoneNumber, text } = req.body;
  console.log(text);
  let response;

  if (text === "") {
    response = `CON Enter your first name`;
  }
  if (text !== "") {
    response = `CON Enter your phone number`;
  }

  setTimeout(() => {
    res.send(response);
    res.end();
  }, 3000);
});

module.exports = router;
