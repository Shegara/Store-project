const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        categories: { type: Array },
        rarity: { type: String }, 
        condition: { type: String }, 
        inStock: { type: Boolean, default: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema); 