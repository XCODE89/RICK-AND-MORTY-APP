const jwt = require('jsonwebtoken');
require("dotenv").config()
const secretKey = process.env.JWT_SECRET
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token inválido' });
      }
      // El token es válido, agregamos la información del usuario al objeto de solicitud para que esté disponible en las rutas protegidas
      req.user = user;
      next();
    });
  };

  module.exports = authenticateToken