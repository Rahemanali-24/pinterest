const mongoose = require('mongoose');
const plm =  require('passport-local-mongoose');


const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true
  },
  currentDate: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: [],
  },

  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
  }
});

postSchema.plugin(plm);

module.exports = mongoose.model('Post', postSchema);

 
