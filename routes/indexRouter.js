var express = require('express');
const { authJwt } = require("../middlewares");
var router = express.Router();
const { landingPage, homePage }= require("../controllers/indexController");



/* GET home page. */
router.get('/', landingPage);
router.get('/home', homePage);

module.exports = router;
