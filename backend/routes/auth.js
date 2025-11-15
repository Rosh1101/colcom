const express = require('express');
const router = express.Router();


// Mock controllers - replace with real controllers / DB calls later
router.post('/signup', (req, res) => {
const { name, email } = req.body;
// validate & save user
return res.status(201).json({ ok: true, message: 'User signed up', user: { name, email } });
});


router.post('/login', (req, res) => {
const { email } = req.body;
// validate & generate token
return res.json({ ok: true, message: 'Logged in', token: 'demo-token' });
});


module.exports = router;