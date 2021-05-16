const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	var flavors = [{name:'Original'},{name:'Code Red'},{name:'Voltage'}];
	//renders the profile page
	res.render('pages/profile', { username : req.session.user.username , flavor : flavors });
});

module.exports = router;