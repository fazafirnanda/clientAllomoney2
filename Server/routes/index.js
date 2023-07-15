const express = require("express");
const router = express.Router();
const user = require("./user");
const bank = require("./bank");
const transaction = require("./transaction");
const savings = require("./savings");
// const hiring = require('./hiring')

router.use("/user", user);
router.use("/bank", bank);
router.use("/transaction", transaction);
router.use("/savings", savings);
// router.get("/", Controller.renderHome)
// router.use("/hiring", hiring)

module.exports = router;
