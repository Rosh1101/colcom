const express = require('express');
const router = express.Router();


router.get('/map', (req, res) => {
return res.json({ ok: true, map: [] });
});


router.get('/communities', (req, res) => {
return res.json({ ok: true, communities: [] });
});


module.exports = router;