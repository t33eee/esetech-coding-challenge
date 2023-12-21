var express = require("express");
const { db } = require("../firebase");
var router = express.Router();

/* GET users listing. */
router.post("/", async function (req, res, next) {
  try {
    const data = {
      name: "john doe",
      state: "kano",
      country: "Nigeria",
    };

    const result = await db.collection("users").doc().set(data);
    console.log(result, "result");

    res.status(200).json({
      status: "success",
      message: "succesfully created an new user",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "error creating user",
    });
    next(error);
  }
});

module.exports = router;
