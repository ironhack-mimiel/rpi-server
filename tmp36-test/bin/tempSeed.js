require('dotenv').config();
const mongoose = require('mongoose');
const Temperature = require('../models/Temperature');
const tempData = require('./tempData');
const _ = require('lodash');
const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() => {
    console.log("hola");
    /* debug(`Connected to DB ${dbURL}`); */
    Temperature.collection.drop();

    tempData.forEach(temp => {
      console.log(temp);
      const newTemp = new Temperature({
        temperature: temp.temperature,
      })
        .save()
        .then(() => console.log("Temperature created"))
        .catch(err => console.log(err));
    })
      
  })
  .catch( err => console.log( err ))
