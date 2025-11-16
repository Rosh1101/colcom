const express = require('express');
const cors = require('cors');
const fs = require('fs');
const yaml = require('js-yaml');
const mongoose = require('mongoose');

// Load config from YAML
let config = {};
try {
  const fileContents = fs.readFileSync('../config.yaml', 'utf8');
  config = yaml.load(fileContents);
  console.log('Config loaded:', config);
} catch (e) {
  console.error('Failed to load config.yaml', e);
  process.exit(1);
}

const app = express();

// Connect to MongoDB
mongoose.connect(config.mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

const registerRoutes = require('./register');
const loginRoutes = require('./login');

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth/signup', registerRoutes);
app.use('/api/auth/login', loginRoutes);

// Health check
app.get('/api', (req, res) => res.json({ message: "ColCom backend running" }));

const PORT = config.port || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
