const mongoose = require("mongoose");

const CatSchema = new mongoose.Schema({
    name: {
        type: String,
        repuired: true,
    },
    pic: {
        type: String,
        required: true,
    },
    userId :{
        type: String,
        required: true,
    }
}, { timestamps: true });

const CategoryModel = mongoose.model("Category", CatSchema)
module.exports = CategoryModel;