var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var publicCert = fs.readFileSync('publickey.pem');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


app.get('/api/hi', function (req, res) {
	var token = req.cookies.token;

	if(!token) {
		res.status(401).send();
		return;
	}

	verifyToken(token, function(error, decoded) {
		if (!error) {
			res.send('Hello! User');
		}
		else {
			res.status(401).send('log in please!');
			console.warn(error);
		}
	});
});

function verifyToken(token, callback) {
	jwt.verify(token, publicCert, {algorithms: ['RS256']}, callback);
}

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens at http://localhost:' + port);