const mongoose = require('mongoose'); 
const autoIncrement = require('mongoose-auto-increment');
const db = require('../config/db.js');
autoIncrement.initialize(db);
const schema = new config.mongoose.Schema({
  toDos: [
    {
      toDo: String,
      tag: String,
      tagColor: String,
      done: Boolean
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: true
  }
}, {
  strict: true
});
var toDo = mongoose.model('toDos', schema);
module.exports = toDo;