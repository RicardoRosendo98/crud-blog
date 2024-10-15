const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleErrorResponse = (res, error, defaultMessage) => {
    console.error(error);
    return res.status(500).json({ error: defaultMessage });
};

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
    }

    try {
        if (await User.findOne({ where: { email } })) {
            return res.status(409).json({ error: 'Email já está em uso.' });
        }

        const user = await User.create({ name, email, password });
        res.status(201).json({ id: user.id, name: user.name, email: user.email });
    } catch (error) {
        handleErrorResponse(res, error, 'Erro ao criar usuário.');
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Credenciais inválidas.' });
        }

        const token = jwt.sign({ id: user.id }, 'sua_chave_secreta', { expiresIn: '1h' });
        res.status(200).json({ token, message: 'Login bem-sucedido!' });
    } catch (error) {
        handleErrorResponse(res, error, 'Erro ao realizar login.');
    }
};
