const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
},{
    collection: 'student'
});

module.exports = mongoose.model('Student', Student);
