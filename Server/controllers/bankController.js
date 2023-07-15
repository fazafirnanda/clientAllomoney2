const { Bank } = require("../models/index");
class BankController{
    static async getAllBanks(req, res, next){
        try {
            const data = await Bank.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = BankController