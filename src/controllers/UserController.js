const User = require('../model/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
        const { nome, email } = req.body;

        const user = await User.create({ nome: nome, email: email });

        return res.json(user);
    }
}