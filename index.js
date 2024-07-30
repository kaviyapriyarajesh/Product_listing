const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();
const port = 3000;

app.use(express.json());

const mongoURI = 'mongodb+srv://kaviya:kaviyapriya@cluster0.phhsteg.mongodb.net/productlisting?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
