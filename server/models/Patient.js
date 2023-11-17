const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    //_id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String, required: true },
    medicalHistory: { type: String },
    allergies: { type: [String] },
})

module.exports = mongoose.model('Patient', patientSchema)

