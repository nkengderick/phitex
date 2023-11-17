const express = require('express');
const patientController = require('../controllers/patientcontroller');

const router = express.Router();

// Create a patient
router.post('/create', patientController.createPatient);

// Get all patients
router.get('/all', patientController.getAllPatients);

// Get patient by ID
router.get('/:patientId', patientController.getPatientById);

module.exports = router;
