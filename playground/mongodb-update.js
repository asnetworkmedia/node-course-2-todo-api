//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	//findOneAndUpdate
/*
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5818cd83c603b63b204f179b')
		}, {
			$set: {
				completed: true
			}
		}, {
			returnOriginal: false
		}).then((result) => {
			console.log(result);
		})
*/


	db.collection('Users').findOneAndUpdate({
		name: 'mike'
		}, {
			$set: {
				name: 'hamid'
			},
			$inc: {
				age: 10
			} 
		}, {
			returnOriginal: false
		}).then((result) => {
			console.log(result);
		})


	//db.close();
});