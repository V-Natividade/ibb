const User = require('../models/User');
const authConfig = require("../config/auth.json");
const bcrypt = require('bcrypt');

module.exports = {
    async register(req, res) {
        const { name, password } = req.body;

        const hash = await bcrypt.hash(password, 10);
        console.log(hash);

        const user = await User.create({ name, password: hash });
        user.password = undefined;

        return res.json(user);
    }
};