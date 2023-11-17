const Patient = require('../models/Patient')

class PatientController {
  
    async createPatient(req, res) {
        const patient = new Patient(req.body)
        if(!patient){
          return res.json({message: "Error"})
        } 
        try{
          await patient.validate();
        } catch (err) {
          if (typeof error === 'object') {
            return res.json({ message: error.errors.password.message });
          } else {
            throw error;
          } 
        }
        
        await patient.save();
        return { message: 'Patient created successfully' };
      }
  
    async getAllPatients(req, res) {
        const patients = await Patient.find();
        res.json(patients);
    }
  
    async getPatientById(patientId) {

      const patient = await Patient.findById(req.params);
  
        if (!patient) {
          throw new Error('Patient not found');
        }
  
        res.json(patient);
    }
  }
  
  module.exports = new PatientController();
  