const User = require('../Models/CustomerModel');

// Controller function for user registration
const register = async (req, res) => {
  try {
    // Example: Creating a new user
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


       
             

// Controller function for user login
const login = async (req, res) => {
  // Handle user login logic
  // Example: Compare credentials, generate JWT, etc.
  res.status(200).json({ message: 'Login successful' });
};

// Export the controller functions
module.exports = {
  register,
  login,
};
