const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VisitorSchema = new Schema({
  slNo: {
    type: Number,
    required: true
  },
  dateAndInTimeOfEntry: {
    type: Date,
    default: Date.now()
  },
  name: {
    type: String,
    required: true
  },
  comingFrom: {
    type: String
  },
  contactNumber: {
    type: String,
    required: true
  },
  whomToMeet: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  },
  visitorBadgeNo: {
    type: Number,
    required: true
  },
  signature: {
    type: String,
    required: true
  },
  outTime: {
    type: Date,
    default: Date.now()
  },
  remarks: {
    type: String
  }
});
module.exports = Item = mongoose.model('visitor', VisitorSchema);