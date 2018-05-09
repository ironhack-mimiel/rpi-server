const express = require('express');
const router  = express.Router();
const Rpi = require('../models/Rpi');



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/addTemp', (req,res,next) => {
  console.log('post');

  let rpiId = req.body.rpiId;
  let temperature1 = req.body.temp1;
  let temperature2 = req.body.temp2;
  let temperature3 = req.body.temp3;
  let date = Object.keys(req.body)[4];

  // HAY QUE CREAR PRIMERO UN DOCUMENTO VIRGEN EN MONGODB

  Rpi.findOne({"rpiId": rpiId})
	.then( rpi => {
		if(!rpi) {
			throw new Error('New RPI, please, create an empty document in DB');
		} else {
			Rpi.findOneAndUpdate({"rpiId": rpiId}, {$push: {temperature: {temperature1, temperature2, temperature3, date}}}, {new:true})
				.then( () => console.log('success posting to DB'))
				.catch( err => console.log('error posting to DB: ' + err))
		}
	})	
});

module.exports = router;
