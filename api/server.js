// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');
const productRoutes = require('./routes/products');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
