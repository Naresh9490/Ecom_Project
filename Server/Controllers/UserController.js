const User = require("../Models/CustomerModel");

// Controller function for user registration
const register = (req, res) => {
  User.create(req.body)
    .then((newUser) => res.status(201).json(newUser))
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

// Controller function for user login
const login = (req, res) => {
  // Handle user login logic
  // Example: Compare credentials, generate JWT, etc.
  res.status(200).json({ message: "Login successful" });
};

// Controller function to get all users
const getAlluses = (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};
// Export the controller functions
module.exports = {
  register,
  login,
  getAlluses
};
