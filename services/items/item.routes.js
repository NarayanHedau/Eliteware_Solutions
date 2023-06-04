var express = require("express");
var router = express.Router();
const auth = require("../../helper/index")
const controller = require("./item.controller");
const validator = require("./joivalidation")

router.post(
    "/create",
    auth.auth.verify,
    validator.createItem,
    controller.create
);

router.get(
    "/getAllItems",
    auth.auth.verify,
    controller.getAllItems
);

router.get(
    "/get/:id",
    auth.auth.verify,
    controller.getSingleItem
);

router.delete(
    "/delete/:id",
    auth.auth.verify,
    controller.deleteItem
);

router.put(
    "/update/:id",
    auth.auth.verify,
    controller.updateItem
);




module.exports = router;