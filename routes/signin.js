const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	//renders login
	res.render('pages/signin', {});
});

router.post('/', async (req, res) => {
	req.session.user = {username: 'gamer'};
	res.redirect('/profile');
	//get req.body username and password
	/*
	const { username, password } = req.body;
	let id;
	let hash = '';
	for(let i = 0; i < users.length; i++){
		if(users[i].username === username){
			id = i;
			hash = users[i].hashedPassword;
		}
	}
	if(hash == ''){
		req.session.error = 'did not provide a valid username';
		return res.status(403).redirect('/');
	}
	//here, you would get the user from the db based on the username, then you would read the hashed pw
	//and then compare it to the pw in the req.body
	bcrypt.compare(password, hash, function(err, result) {
		if (result) {
			req.session.user = users[id];
			res.redirect('/private');
		} else {
			req.session.error = 'incorrect password';
			res.status(403).redirect('/');
		}
	});
	*/
	//if they match then set req.session.user and then redirect them to the login page
	// I will just do that here */
});

module.exports = router;