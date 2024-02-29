const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://pinterest:NXZUHMmaRioThZIa@cluster0.4xuyxud.mongodb.net/';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // Increase connection timeout to 30 seconds
    socketTimeoutMS: 45000 
  };
  
  mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;