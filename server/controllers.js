//controllers.js

const { User, ItemCategory, Product } = require('./models');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllItemCategories = async (req, res) => {
    try {
        const itemCategories = await ItemCategory.find();
        res.json(itemCategories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createItemCategory = async (req, res) => {
    try {
        const itemCategory = await ItemCategory.create(req.body);
        res.status(201).json(itemCategory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};