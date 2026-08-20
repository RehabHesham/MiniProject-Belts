// import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import { Schema, model } from 'mongoose';

// create schema  =>  describe what properties in object (can contain some validation)
// mongoose.Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: [3, 'Name must be more than or equal 3 char'],
      maxlength: [30, 'Name must be less than or equal 30 char'],
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      unique: true, // run at database
      match: [
        /^[a-zA-Z0-9._]*@[a-zA-Z]{3,8}.[a-zA-Z]{3}$/,
        'email must be like ali@gmail.com',
      ],
      required: [true, 'email is required'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minlength: [8, 'password should be at least 8 char'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  { timestamps: true },
);

// you can make custom logic
// this method will run before
// User.create()  => user.create user obj.save() inside it
// while updated  => we manually call obj.save()
userSchema.pre('save', async function () {
  // encryption password
  // me must use function keyword to have this
  // this will refer to user object being saved
  //console.log('from pre save', this);

  // console.log(this.isModified('password'));
  if (this.isModified('password'))
    this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
// use schema to create model
// mongoose.model
export default model('User', userSchema);
