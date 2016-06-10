var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var privateCert = fs.readFileSync('privatekey.pem');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/login', function (req, res) {
	var token = generateToken();
	res.cookie('token', token);
	res.status(200).send();
})

function generateToken() {
	return jwt.sign({ foo: 'bar' }, privateCert, { algorithm: 'RS256' });
}

var port = process.env.PORT || 8088;
app.listen(port);
console.log('Magic happens at http://localhost:' + port);