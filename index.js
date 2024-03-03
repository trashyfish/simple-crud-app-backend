const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated');
});

//routes
app.use('/api/products', productRoute);

/** 
app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // params is used to find the parameters or values passed on the url
    // which are query parameters appended to the URL,
    // since get uses the url to send data
    const getProductById = await Product.findById(id);
    res.status(200).json(getProductById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

*/

// app.post('/api/products', async (req, res) => {
//   try {
//     const createProduct = await Product.create(req.body);
//     res.status(200).json(createProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //update product
// app.put('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;

//     const updateProduct = await Product.findByIdAndUpdate(id, req.body);

//     if (!updateProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     const updatedProduct = await Product.findById(id);

//     return res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //delete a product
// app.delete('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deleteProduct = await Product.findByIdAndDelete(id);

//     if (!deleteProduct) {
//       return res.status(404).json({ message: 'Product not Found' });
//     }

//     return res.status(200).json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(
    'mongodb+srv://chrisayo:123123123@cluster0.p9agyaq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log('Connected to the database');

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Failed to connect');
  });
