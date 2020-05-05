const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  }, 
  type: {
    type: String,
    enum: ['ADMIN', 'ADOPTER'],
    required: true
  } 
});

const User = model('User', userSchema);
module.exports = User;