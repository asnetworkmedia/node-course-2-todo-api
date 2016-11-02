const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((res) => {
//	console.log(res);
//});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('581a2abe4cd2c0d83007a9ab').then((todo) => {
	if (!todo) {
		return console.log('Todo not found')
	}

	console.log('Todo removed', todo);

}).catch((e) => {
	console.log('Bad ID');
});