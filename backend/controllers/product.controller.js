import debug from "debug";
import productModel from "../models/product.model.js";

const debugging = debug("development:controller:product");

// Function to add products
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !subCategory ||
      !sizes ||
      !bestseller
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    if (!image1 || !image2 || !image3 || !image4) {
      return res
        .status(400)
        .json({ success: false, message: "All images are required." });
    }

    let images = [image1.buffer, image2.buffer, image3.buffer, image4.buffer];

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
    };

    let product = new productModel({ ...productData, images });
    await product.save();

    debugging(productData);

    res.json({ success: true, message: "Product added successfully." });
  } catch (error) {
    debugging(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Function for list products
const listProducts = async (req, res) => {
  try {
    let products = await productModel.find();
    return res.status(200).json({ success: true, data: products });
  } catch (error) {
    debugging(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Function for removing products
const removeProduct = async (req, res) => {
  try {
    await productModel.deleteOne({ _id: req.body.id });
    res.status(200).json({ success: true, message: "Product removed." });
  } catch (error) {
    debugging(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Function for single product info
const singleProduct = async (req, res) => {};

export { addProduct, listProducts, removeProduct, singleProduct };
