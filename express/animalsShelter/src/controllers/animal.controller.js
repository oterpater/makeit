const Shelter = require('../models/shelter.model');
const Animal = require('../models/animal.model');

module.exports = {
  async getAll(req, res) {
    try {
      const shelterId = req.params.shelterId;
      animal = await Animal.find().populate('shelter');
      res.status(200).json(animal);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getOne(req, res) {
    try {
      const id = req.params.animalId;
      const animal = await Animal.findById(id).populate('shelter');
      res.status(200).json(animal);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async create(req, res) {
    try {
      const { shelterId } = req.params;
      const animal = await Animal.create({
        ...req.body, 
        shelter: shelterId
      });
      // const shelter = await Shelter.findById(shelterId);
      // shelter.animals.push(animal);
      // shelter.save();

      res.status(200).json(animal);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req, res) {
    try {
      const id = req.params.animalId;
      const options = {
        new: true,
        runValidations: true,
        useFindAndModify: false,
      };

      const animal = await Animal.findByIdAndUpdate(id, req.body, options).populate('shelter');

      res.status(200).json(animal);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const id = req.params.animalId;
      const animal = await Animal.findByIdAndDelete(id);
      res.status(200).json(animal);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
};

