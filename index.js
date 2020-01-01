'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('./models/User');

const dbConnectionString = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

mongoose.connect(dbConnectionString, {useNewUrlParser: true});
mongoose.connection.on('error', function error(err) {
  console.log('Error in connection', err);
  process.exit(1);
});

app.get('/test', (req, res) => {
  User.find((err, response) => {
    console.log('``````````', response);
    res.send(response);
  });
});

app.get('/name/:name', (req, res) => {
  let user = new User({id: 1, name: 'testing'});
  user.save((err, response) => {
    console.log('``````````', response);
    res.send(response);
  });
});

app.listen(3002, (err) => {
  if (err) {
    console.log('error in connection');
    return err;
  }
  console.log('listing on port 3002');
  console.log('http://localhost:%d', 3002);
});
