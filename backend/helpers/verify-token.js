const jwt = require("jsonwebtoken");
const getToken = require("./get-token");

// This middleware function checks if the user is authenticated by verifying the JWT token.
const checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({ message: "Acesso negado!" });
    return;
  }

  const token = getToken(req);

  if (!token) {
    res.status(401).json({ message: "Acesso negado!" });
    return;
  }

  try {
    const verified = jwt.verify(token, "nossosecret"); // Verify the token using the secret key
    req.user = verified; // Attach the verified user information to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(400).json({ message: "Token inválido!" });
    return;
  }
};

module.exports = checkToken;
