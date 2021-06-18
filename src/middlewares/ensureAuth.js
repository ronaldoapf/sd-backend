import jwt from 'jsonwebtoken';

export default async function ensureAuth(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }
  const [_, token] = authorization.split(' ');
  try {
    const { id } = jwt.verify(token, 'grade_system_sd');
    req.userId = id;
    return next();
  } catch {
    return res.status(401).json({ message: 'Token inválido' });
  }
}
