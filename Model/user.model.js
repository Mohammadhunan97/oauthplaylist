const mongoose = require('mongoose'),
Schema = mongoose.Schema;

let UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: String
})

module.exports = mongoose.model('User',UserSchema);
