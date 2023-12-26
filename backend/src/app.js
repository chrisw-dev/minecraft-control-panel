const express = require('express');
const authRoutes = require('./routes/authRoutes');
const authenticate = require('./middleware/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(authenticate);

// Routes
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));