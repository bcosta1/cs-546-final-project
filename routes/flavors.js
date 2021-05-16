const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	//renders the profile page
	res.render('pages/flavors', {});
});

module.exports = router;