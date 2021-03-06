const express = require('express');
const app = express();
const session = require('express-session');
const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: '' }));
app.set('view engine', 'handlebars');

app.use(session({
  name: 'AuthCookie',
  secret: 'some secret string!',
  error: '',
  resave: false,
  saveUninitialized: true
}));

//logging middlewear
app.use('/', (req, res, next) => {
	let time = new Date().toUTCString();
	let meth = req.method;
	let rou = req.originalUrl;
	console.log("[" + time + "]: " + meth + " " + rou);
	next();
});

//sign in middlewear
app.use('/profile', (req, res, next) => {
	if (!req.session.user) {
		res.redirect('/signin');
	} else {
		next();
	}
});

app.use('/signin', (req, res, next) => {
	if (req.session.user) {
		//redirects to private if user is authenticated
		res.redirect('/profile');
	} else {
		//renders signin
		next();
	}
});

configRoutes(app);

app.listen(3000, () => {
	console.log("We've now got a server!");
	console.log('Your routes will be running on http://localhost:3000');
});