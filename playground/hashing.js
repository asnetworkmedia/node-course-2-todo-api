const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.getSalt(10, (err) => {
	bcrypt.hash(password, salt, (err, hash) => {
		var hashPassword = hash;
	});
});

bcrypt.compare(password, hashPassword, (err, res) => {

})


/*
var data = {
	id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(decoded);


var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`hash: ${hash}`);

var data = {
	id: 4
};

var token = {
	data,
	hash: SHA256(JSON.stringify(data)).toString()
}

*/