const express = require('express');
const appointmentController = require('../controllers/appointmentcontroller');

const router = express.Router();

// Create a appointment
router.post('/create', appointmentController.createAppointment);

// Get appointment by ID
router.get('/:appointmentId', appointmentController.getAppointments);

module.exports = router;
