const jwt = require("jsonwebtoken");
const { createError } = require("./error");

module.exports.verifyToken= verifyToken = (req, res, next) => {
 // const token = req.cookies.jwt;
  const token = req.headers.authorization;
   console.log(token);
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

module.exports.verifyUser = (req, res, next) => {

  const token = req.headers.authorization;
  console.log(token);
 if (!token) {
   return next(createError(401, "You are not authenticated!"));
 }

  jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) return next(createError(403, "Token is not valid!"));
      req.user = user;})

 
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
 
};

module.exports.verifyAdmin = (req, res, next) => {

  const token = req.headers.authorization;
  console.log(token);
 if (!token) {
   return next(createError(401, "You are not authenticated!"));
 }

 jwt.verify(token, process.env.JWT, (err, user) => {
  if (err) return next(createError(403, "Token is not valid!"));
  req.user = user;})



    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }

};
/*
const jwt = require('jsonwebtoken');

// Middleware function for JWT verification
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  // Verify the token using your secret key (should match the one used during token generation)
  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // If token is valid, you can access the decoded data, for example, the user ID
    //req.userId = decoded.userId;

    // Proceed to the next middleware or route handler
    next();
  });
};

module.exports = verifyToken;
*/