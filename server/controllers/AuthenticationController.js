const User = require("../models/UserModel");
const jwt = require("jwt-simple");

function authentication(request, response,next) {
  // get the token from the header
  if (request.path.split("/")[1] !== "api") 
  {
    return next();
  }
  const tokenString = request.header("authorization");
  if (!tokenString) {
    return response.send("Invalid credentials");
  }
  const tokenObject = jwt.decode(tokenString,process.env.SECRET);
  // decrypt the token
  // find user by id
  User.findById(tokenObject.userId, function (err, user) {
    if (err) { return response.send("Error"); }
    if (user) {
      request.user = user;
      return next();
    } 
    return response.send("Invalid credentials");
  });
}

exports.authentication = authentication;
