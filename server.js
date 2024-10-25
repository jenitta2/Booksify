const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set the view engine to EJS for rendering HTML
app.set('view engine', 'ejs');

// MongoDB Connection
// Replace 'your_mongo_db_connection_string_here' with your actual connection string
const dbURI = 'mongodb+srv://sanskrutisahoo12:sansahoo@cluster0.e6pbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';  

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static('public'));

// Routes
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
