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
  const { username, password } = req.body;

  User.findOne({ username })
  .then((existingUser) => {
    if (existingUser) {
      if (existingUser.password === password) {
        res.status(200).json({ message: "Login successful" });
      }else {
        res.staus(401).json({error:"Invalid Password!"})
      }
    } else{
      res.staus(404).json({error:"Username not found!"})
    }
  })
  .catch((error)=>{
    console.log(error);
    res.status(500).json({error:"Internal Server Error"})
  })
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
  getAlluses,
};
