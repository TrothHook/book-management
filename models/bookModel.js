const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Book title is required'],
        unique: [true, 'Book title must be unique']
    },
    excerpt:{
        type: String,
        required: [true, 'Excerpt from the book is required']
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
        required: [true, 'Reference to the user model is required']
    },
    ISBN: {
        type: String,
        required: [true, 'ISBN number of the book is required'],
        unique: [true, 'ISBN number must be unique']
    },
    category: {
        type: String,
        required: [true, 'Category is required']
    },
    subcategory: {
        type: String,
        required: [true, 'Sub Category is required']
    },
    
})