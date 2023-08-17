// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Neyo:qd6hRpkkCDYVcGEe@cluster0.j2doseh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
