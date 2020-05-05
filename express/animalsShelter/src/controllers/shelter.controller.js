const Shelter = require('../models/shelter.model');
const Animal = require('../models/animal.model');
const User = require('../models/user.model');

module.exports = {
  async getAll(req, res) {
    try {
      shelter = await Shelter.find().populate('animals').populate('owner');
      res.status(200).json(shelter);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const shelter = await Shelter.findById(id).populate('animals', 'owner');
      res.status(200).json(shelter);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async create(req, res) {
    try {
      const shelter = await Shelter.create(req.body);
      // await req.body.animals.forEach(async id => {
      //   const animal = await Animal.findById(id);
      //   animal.shelter.push(shelter);
      //   await animal.save();
      // });
      res.status(200).json(shelter);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const options = {
        new: true,
        runValidations: true,
        useFindAndModify: false,
      };

      const shelter = await Shelter.findByIdAndUpdate(id, req.body, options).populate('animals', 'owner');

      res.status(200).json(shelter);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const shelter = await Shelter.findByIdAndDelete(id);
      res.status(200).json(shelter);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
};