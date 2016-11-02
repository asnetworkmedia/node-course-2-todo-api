const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

/*
var user = new User({email : "hamid.shahrokhi@gmail.com"});
user.save().then((data) => {
	console.log('User added', data);
}, (err) => {
	console.log('Failed to add user', err);
});*/

var id = '581a025b29dd85442c1cdae4';

if (!ObjectID.isValid(id)) {
	console.log('Invalid id');
}

User.findById(id).then((user) => {
	console.log('User', user);
}
, (err) => { console.log('Unable to find the user', err) })
// ).catch((err) => { console.log('Unable to find the user', err) });

return;

var id = '68198a1dd231b6d019adb1461';

if(!ObjectID.isValid(id)) {
	return console.log('ID not valid');
}

Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});


Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
	if (!todo) {
		return console.log('Id not found');
	}
	console.log('Todo by Id', todo);
}).catch((e) => console.log(e));