const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id: Number,
    title: String,
    completed: Boolean,
    order: Number,
    date: String,
}, { timestamps: true })

module.exports = mongoose.model('todo', ProductSchema)