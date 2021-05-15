const express = require('express');
const app = express();
const session = require('express-session');
const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: "" }));
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
	let auth = "(Authenticated User)";
	if(!req.session.user)
		auth = "(Non-Authenticated User)";
	console.log("[" + time + "]: " + meth + " " + rou + " " + auth);
	next();
});

configRoutes(app);

app.listen(3000, () => {
	console.log("We've now got a server!");
	console.log('Your routes will be running on http://localhost:3000');
});