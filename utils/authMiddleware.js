const authMiddleware = (req, res, next) => {
  if (req.session.login) {
    req.user = {
      Login: req.session.Login,
    };

    next();
  } else {
    res.status(401).json({ message: 'You are not authorized' });
  }
};

module.exports = authMiddleware;
