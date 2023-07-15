const { Savings } = require("../models/index");
class SavingController {
    static async createSavings(req, res, next) {
        try {
            const { account, BankId, balance } = req.body;
            const { UserId } = req.user;
            if(!balance){
                balance=0
            }
            await Savings.create({
                account,
                BankId,
                balance,
                UserId,
            });
            res.status(201).json({ message: "Berhasil menambahkan tabungan" });
        } catch (error) {
            next(error);
        }
    }
    
    static async getAllSavings(req, res, next){
        try {
            const data = await Savings.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getSavingById(req, res, next){
        try {
            const{id} = req.params
            const data = await Savings.findOne({where:{
                id
            }})

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = SavingController;
