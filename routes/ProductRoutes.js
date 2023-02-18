const router = require("express").Router();

const Product = require("../models/ProductModel");


//Create new blog
router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(newProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get total number
router.get("/count", async (req, res) => {
    try {
        const totalProduct= await Product.countDocuments();

        res.status(200).json(totalProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update blog
router.put("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json("Updated product!");
        } catch (err) {
            res.status(500).json(err);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete Product
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        try {
            await product.delete();
            res.status(200).json("Product has been deleted!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Get Product
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/cat", async (req, res) => {
    try {
        const product = await Product.find({category:req.body.category});
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get all Products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products)

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
