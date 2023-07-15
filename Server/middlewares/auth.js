const { User } = require("../models/index");
const { decodeToken } = require("../helpers/jwt");

async function authentication(req, res, next) {
    try {
        const access_token = req.headers.access_token;
        if (!access_token) {
            throw { name: "Unauthenticated" };
        }
        const payload = decodeToken(access_token);
        const user = await User.findOne({
            where: {
                email: payload.email,
            },
        });
        if(!user){
            user = await User.findOne({
                where: {
                    deviceId: payload.deviceId,
                },
            }); 
        }
        if (!user) {
            throw { name: "Unauthenticated" };
        }
        req.user = {
            UserId: user.id,
            name: user.name,
            email: user.email,
        };
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = { authentication };
