const { Schema, model } = require('mongoose');

const animalSchema = new Schema({
	shelter: {
		type: { type: Schema.Types.ObjectId, ref: 'Shelter'}
	},
	name: {
		type: String,
		required: true
	}, 
	breed: {
		type: String,
		required: true
	}, 
	age: {
		type: Number,
		required: true
	}, 
	size: {
		type: String,
		enum: ['small', 'medium', 'big'],
		required: true
	},
	specie: {
		type: String,
		enum: ['dog', 'cat'],
		required: true
	}
});

const Animal = model('Animal', animalSchema);
module.exports = Animal;