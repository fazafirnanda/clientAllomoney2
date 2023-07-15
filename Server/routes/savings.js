const express = require('express')
const Controller = require('../controllers/savingController')
const router = express.Router()

router.get("/", Controller.getAllSavings)
router.post("/", Controller.createSavings)
router.get("/:id", Controller.getSavingById)


module.exports = router