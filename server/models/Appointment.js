const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  appointmentId: { type: String, required: true, unique: true },
  workerId: { type: String, required: true },
  patientId: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  notes: { type: String, required: false },
});

module.exports = mongoose.model('Appointment', appointmentSchema);


