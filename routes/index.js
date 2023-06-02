var express = require("express");
var router = express.Router();
const User = require("../model/user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Home page!");
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  const { phoneNumber, text } = req.body;
  console.log(text);
  let response;

  if (text === "") {
    response = `CON Enter your full name`;
  }
  if (text !== "") {
    let textArray = text.split("*");
    console.log(textArray);

    if (textArray.length === 1) {
      response = `CON Enter your Phone number`;
    } else if (textArray.length === 2) {
      if (parseInt(textArray[1]) > 0) {
        response = `CON Please confirm if you want to save the details\n1. Confirm\n2. Cancel`;
      } else {
        response = `END Please try again and make sure your Phone number is valid`;
      }
    } else if (textArray.length === 3) {
      if (parseInt(textArray[2]) === 1) {
        const fullName = textArray[0];
        const number = textArray[1];
        const user = new User({
          fullName,
          number,
        });
        await user.save();
        response = `END Your data was saved successfully!`;
      } else if (parseInt(textArray[2]) === 2) {
        response = `END Data was not saved. `;
      } else {
        response = `END Invalid Input. Please try again`;
      }
    } else response = `END Network Error, Please try again.`;
  }

  setTimeout(() => {
    res.send(response);
    res.end();
  }, 3000);
});

module.exports = router;

// response =
// `END Your fullname is ` +
// textArray[0] +
// ` and your Phone number is ` +
// textArray[1];
