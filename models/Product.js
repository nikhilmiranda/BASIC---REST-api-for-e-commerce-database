// importing mongoose module
const mongoose = require('mongoose')
const express = require('express')

// import schema 
const Schema = mongoose.Schema;

let productSchema = new Schema({
    productId: {
        type: String,
        unique: true
    },
    nameOfProduct: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    views: {
        type: Number,
        default: 0
    },
    isOutOfStock: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        default: ''
    },
    manufacturer: {
        type: String,
        default: ''
    },
    tags: [],

    introducedToMarket: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('Blog', productSchema);