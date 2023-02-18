const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    perportionrate: {
        type: String,
    },
    halfOfHalfkgRate: {
        type: String,
    },
    halfkgRate: {
        type: String,
        required: true,
    },
    fullkgRate: {
        type: String,
        required: true,
    },
    userId:{
        type: String,
        required: true,
    }

}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;