const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
// mongodb+srv://amirmehboob16:<db_password>@cluster0.1phil.mongodb.net/

mongoose
    .connect('mongodb+srv://shakirbaacha:IPeP9GlOzinopyIO@cluster0.1phil.mongodb.net/aaa', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api', formRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

 