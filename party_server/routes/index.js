var express = require("express");
var router = express.Router();
// const user = require("../controller/user");

router.use('/admin',require('../controller/user'));
router.use('/admin/news',require('../controller/news'))
module.exports = router;
