const { compareHash } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const nodeMailer = require("../helpers/nodemailer");

const { User } = require("../models/index");
class UserController {

    static async register(req, res, next) {
        try {
            const { name, email, deviceId, password } = req.body;
            // const deviceId = "testajadulu";
            console.log(req.body);
            await User.create({
                name,
                email,
                password,
                deviceCode: deviceId,
            });

            res.status(201).json({ message: "Berhasil register" });
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email) {
                throw { name: "EmailOrPasswordRequired" };
            }
            if (!password) {
                throw { name: "EmailOrPasswordRequired" };
            }

            let user = await User.findOne({
                where: { email },
            });

            if (!user) {
                throw { name: "InvalidCredentials" };
            }

            let compared = compareHash(password, user.password);

            if (!compared) {
                throw { name: "InvalidCredentials" };
            }

            let payload = {
                email: user.email,
                name: user.name,
            };

            let access_token = createToken(payload);

            res.status(200).json({
                access_token,
                email: user.email,
                name: user.name,
            });
        } catch (error) {
            next(error);
        }
    }

    static async noLogin(req, res, next) {
        try {
            const { deviceId } = req.body;
            if (!deviceId) {
                throw { name: "deviceMustBeLogin" };
            }

            let user = await User.findOne({
                where: { deviceCode: deviceId },
            });

            if (!user) {
                User.create({deviceCode:deviceId})
            }

            let payload = {
                deviceId: user.deviceCode
            };

            let access_token = createToken(payload);

            res.status(200).json({
                access_token,
                deviceId: user.deviceCode
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
