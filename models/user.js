// import mongoose from "mongoose";
import { Schema, model } from 'mongoose';

// create schema  =>  describe what properties in object (can contain some validation)
// mongoose.Schema
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

// use schema to create model
// mongoose.model
export default model('User', userSchema);
