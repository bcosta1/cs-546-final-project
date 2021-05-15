const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	res.render('posts/private', { title: 'Login', user: req.session.user });
});

module.exports = router;
