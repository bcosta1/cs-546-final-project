const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	//renders the profile page
	res.render('pages/profile', {});
});

module.exports = router;