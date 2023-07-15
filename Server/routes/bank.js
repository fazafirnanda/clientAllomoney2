const express = require('express')
const Controller = require('../controllers/bankController')
const router = express.Router()

router.get("/", Controller.getAllBanks)

module.exports = router