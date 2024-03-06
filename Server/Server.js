const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('./config/Dbconfig');
const userRouter = require('./Routers/UserRouter');
const PORT = 8080;

app.use(cors());

app.use(express.json());

app.use('/api/users', userRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.error(`Server failed to start. Error: ${error}`);
  } else {
    console.log(`Server running on Port Number ${PORT}`);
  }
});
