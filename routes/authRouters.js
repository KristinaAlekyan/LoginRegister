var express = require('express');
var router = express.Router();
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/authController");


  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

console.log(verifySignUp.checkDuplicateUsernameOrEmail)
console.log(verifySignUp.checkRolesExisted)
   router.post("/signup",   [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  router.post("/signin", controller.signin);

module.exports = router;
