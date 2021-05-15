const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	//renders the home page
	res.render('pages/home', {});
});

module.exports = router;
