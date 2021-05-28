const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: "1day"
    });
}

module.exports = {

    async authenticate(req, res) {
        const { name, password } = req.body;
        const user = await User.findOne({ 
            where: {
                name: name
            }
         });

        if (!user) return res.status(400).send({ error: "User not found" });

        if (!(await bcrypt.compare(password, user.password)))
            return res.status(400).send({ error: "Invalid password" });

        user.password = undefined;

        res.send({
            user,
            token: generateToken({ id: user.id })
        });
    }
}