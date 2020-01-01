'use strict';

const mongoose = require('mongoose');
let schema = mongoose.Schema;

let UserSchema = new schema({
  name: {
    type: String
  },
  id: {
    type: Number
  }
});

module.exports = mongoose.model('person1', UserSchema);