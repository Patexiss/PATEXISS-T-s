const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: {type: String, required: true },
  firstName: {type: String },
  lastName: {type: String },
  email: {type: String, required: true },
  displayName: {type: String, default: ''},
  image: {type: mongoose.Schema.Types.ObjectId, ref: 'images' }
});


module.exports = mongoose.model('User', UserSchema);