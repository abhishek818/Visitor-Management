const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

const db = config.get('mongoURI');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


const Visitor = require('./models/Visitor');

const visitor1 = new Visitor({
  slNo: 1,
  name: 'Abhishek',
  contactNumber: 8073449085,
  whomToMeet: 'Mani',
  purpose: 'client meeting',
  visitorBadgeNo: 123,
  signature: 'abhi'
});

visitor1
  .save()
  .then(item => console.log(item))
  .catch(err => console.log(err));