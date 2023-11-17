const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  workerId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  specialty: { type: String, required: true },
  qualifications: { type: String, required: true },
  experience: { type: Number, required: true },
  availability: { type: Object },
  contactInformation: { type: Object },
});

module.exports = mongoose.model('Worker', workerSchema);

