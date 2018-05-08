const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temperatureSchema = new Schema(
  {
    temperature: Number,
  },
  {
    timestamps: {
      createdAt: 'created_at'
    }
  }
);

const Temperature = mongoose.model('Temperature', temperatureSchema);
module.exports = Temperature;
