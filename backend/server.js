const fs = require('fs');
const yaml = require('js-yaml');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');


dotenv.config();


// Load YAML config
const config = yaml.load(fs.readFileSync('./config.yaml', 'utf8'));


const PORT = process.env.PORT || config.environment.port || 5500;
const app = express();


app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || config.environment.cors_origin }));
app.use(morgan('dev'));


// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);


app.listen(PORT, () => {
console.log(`${config.app.name} backend running in ${process.env.NODE_ENV || config.environment.mode} on http://localhost:${PORT}`);
});