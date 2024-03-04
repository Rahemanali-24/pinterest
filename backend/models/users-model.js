const mongoose = require("mongoose");

const plm =  require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  
  },
  posts: [
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    }
  ],

  dp: {
    String,
  },

 

  
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);

