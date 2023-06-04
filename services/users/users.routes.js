var express = require("express");
var router = express.Router();
const auth = require("../../helper/index")
const controller = require("./users.controller");
const validator = require("./joivalidation")

router.post(
    "/register",
    validator.registration,
    controller.register
);

router.post(
    "/login",
    validator.login,
    controller.login
);

router.get(
    "/get", 
    auth.auth.verify,
    controller.getProfile
)

router.get(
    "/getAllUsers", 
    auth.auth.verify,
    controller.getAllUsers
)

module.exports = router;