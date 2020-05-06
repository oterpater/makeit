const { Schema, model } = require('mongoose');

const shelterSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User'},
  name: {
    type: String,
    required: true,
  },
  animals: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Animal'}]
  }
});

const Shelter = model('Shelter', shelterSchema);
module.exports = Shelter;
