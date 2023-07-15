const { TransactionSavings, Transaction, Savings } = require("../models/index");
class TransactionSavingController {

    static async createTransactions(req, res, next) {
        try {
            const { SavingsId, TransactionId, totalTransactions } = req.body;
            const data = await TransactionSaving.create({
                SavingsId, TransactionId, totalTransactions
            });
            if(data){
                const checkTransaction = await Transaction.findOne({where:{id:TransactionId}})
                checkSaving = await Savings.findOne({where:{id:SavingsId}})
                if(checkTransaction.name === "Pemasukan"){
                    await checkSaving.increment({
                        'balance': totalTransactions,
                      });
                      
                }else if(checkTransaction.name === "Pengeluaran"){
                    await checkSaving.decrement({
                        'balance': totalTransactions,
                      });
                }
            }
            res.status(201).json({ message: "Transaksi Berhasil" });
        } catch (error) {
            next(error);
        }
    }
    
    static async getAllTransactions(req, res, next){
        try {
            const data = await Transaction.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getAllTransactionSaving(req, res, next){
        try {
            const data = await TransactionSavings.findAll()
            
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getTransactionSavingByTransactionId(req, res, next){
        try {
            const{id} = req.params
            console.log(req.params, ">>>>>>>>>>>>>");
            const data = await Transaction.findAll({where:{
                id
            }})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getTransactionSavingById(req, res, next){
        try {
            const{id} = req.params
            const data = await TransactionSavings.findOne({where:{
                id
            }})

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TransactionSavingController;
