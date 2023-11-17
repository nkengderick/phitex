const express = require('express');
const workerController = require('../controllers/workercontroller');

const router = express.Router();

// Create a worker
router.post('/create', workerController.createWorker);

// Get all workers
router.get('/all', workerController.getAllWorkers);

// Get worker by ID
router.get('/:workerId', workerController.getWorkerById);

module.exports = router;
