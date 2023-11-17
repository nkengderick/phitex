const Appointment = require('../models/Appointment')

exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment({
      appointmentId: req.body.appointmentId,
      healthcareProviderId: req.body.healthcareProviderId,
      patientId: req.body.patientId,
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      notes: req.body.notes,
    });

    await appointment.save();

    res.status(201).json({
      message: 'Appointment created successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while creating the appointment',
      error: error,
    });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();

    res.status(200).json({
      appointments: appointments,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while retrieving the appointments',
      error: error,
    });
  }
};
