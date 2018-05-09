require('dotenv').config();
const mongoose = require('mongoose');
const Rpi = require('../models/Rpi');
const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() => {
    console.log("hola");
    /* debug(`Connected to DB ${dbURL}`); */
    Rpi.collection.drop();

      const newRpi = new Rpi(
        {
    		rpiId: 1,
		temperature: []
  	}
      )
        .save()
        .then(() => console.log("Rpi created"))
        .catch(err => console.log(err));
      
  })
  .catch( err => console.log( err ))
