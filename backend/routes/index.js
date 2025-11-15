const express = require('express');
const router = express.Router();
const config = require('js-yaml').load(require('fs').readFileSync('./config.yaml', 'utf8'));


// split routes
router.get(config.routes.home, (req, res) => res.json({ message: 'CampusEngage API - Home' }));


const authRoutes = require('./auth');
const resourceRoutes = require('./resources');


router.use('/auth', authRoutes);
router.use('/resources', resourceRoutes);


module.exports = router;