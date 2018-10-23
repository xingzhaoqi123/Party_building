var express = require("express");
var router = express.Router();
// const user = require("../controller/user");

router.use('/admin',require('../controller/user'));

module.exports = router;
