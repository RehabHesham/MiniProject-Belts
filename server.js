import app from './app.js';
import mongoose from 'mongoose';

// In production
// server will inject some variables
// these variables will be injected in global object
// process.env

// In development
// we need to use package to help in injection
// dotenv package
import dotenv from 'dotenv';
dotenv.config(); // inject values in .env file in process.env

// connect to database
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log('Connected to mongodb');

      // initiate server
      const PORT_NUMBER = process.env.PORT_NUMBER || 3000;
      app.listen(PORT_NUMBER, () => {
        console.log(`Server running at http://localhost:${PORT_NUMBER}`);
      });
    })
    .catch((err) => {
      console.log('something went wrong');
      console.log(err.message);
    });
} else {
  console.log('missing mongodb uri');
}
