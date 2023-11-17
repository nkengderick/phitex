const Worker = require('../models/worker');

class WorkerController {
  async createWorker(workerId, firstName, lastName, email, phone, address, role, department) {
    try {
      const worker = new Worker({
        workerId,
        firstName,
        lastName,
        email,
        phone,
        address,
        role,
        department,
      });

      await worker.save();
      return { message: 'Worker created successfully' };
    } catch (err) {
      console.error(err);
      return { message: 'An error occurred while creating the worker' };
    }
  }

  async getAllWorkers() {
    try {
      const workers = await Worker.find();
      res.json(workers)
    } catch (err) {
      console.error(err);
      throw new Error('An error occurred while retrieving workers');
    }
  }

  async getWorkerById(workerId) {
    try {
      const worker = await Worker.findById(workerId);

      if (!worker) {
        throw new Error('Worker not found');
      }

      res.json(worker);
    } catch (err) {
      console.error(err);
      throw new Error('An error occurred while retrieving worker');
    }
  }
}

module.exports = new WorkerController();
