const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const user = {
  id: 1,
  username: "admin",
  password: bcrypt.hashSync("123456", 10) // senha padrão
};

module.exports = {
  async login(req, res) {
    const { username, password } = req.body;

    if (username !== user.username) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.json({ token });
  }
};
