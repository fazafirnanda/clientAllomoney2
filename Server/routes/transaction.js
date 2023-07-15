const express = require('express')
const Controller = require('../controllers/transactionController')
const router = express.Router()

router.get("/", Controller.getAllTransactionSaving)
router.post("/", Controller.createTransactions)
router.get("/categories", Controller.getAllTransactions)
router.get("/categories/:id", Controller.getTransactionSavingByTransactionId)
router.get("/:id", Controller.getTransactionSavingById)


module.exports = router