const Product = require('../models/product.model');

//read
const getProducts = async (req, res) => {
  try {
    const readAllProducts = await Product.find({});
    res.status(200).json(readAllProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    // params is used to find the parameters or values passed on the url
    // which are query parameters appended to the URL,
    // since get uses the url to send data
    const readProductById = await Product.findById(id);

    if (!readProductById) {
      return res.status(404).json('Product not found');
    }

    return res.status(200).json(readProductById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create
const createProduct = async (req, res) => {
  try {
    const createAProduct = await Product.create(req.body);
    res.status(200).json(createAProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updateProductById = await Product.findByIdAndUpdate(id, req.body);

    if (!updateProductById) {
      return res.status(404).json('Product not found');
    }

    const updatedProduct = await Product.findById(id);
    return res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res.status(404).json('Product not found');
    }

    return res.status(200).json('Product deleted Successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
