const express = require('express')
const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib')
const time = require('./../libs/timeLib')
const log = require('./../libs/loggerLib')
const check = require('./../libs/checkLib')
//Importing the model here 
const ProductModel = mongoose.model('Blog')

let getAllProduct = (req, res) => {
    ProductModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'appController --- getAllProduct', 10)
                let apiResponse = response.generate(true, 'Failed to find Product Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No Product Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Product Details Found', 200, result)
                res.send(apiResponse)
            }
        })
} // end get all Products

/**
 * function to read single Product.
 */
let viewByProductId = (req, res) => {

    ProductModel.findOne({
        'productId': req.params.productId
    }, (err, result) => {

        if (err) {
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Product is Missing', 403, null)
            res.send(apiResponse)
        } else {
            logger.info("Product found successfully","appController---ViewProductById",5)
            let apiResponse = response.generate(false, 'Product Found SUccessfully', 200, result)
            res.send(apiResponse)
        }
    })
}

/**
 * function to read Products by category.
 */
let viewByCategory = (req, res) => {

    ProductModel.find({
        'category': req.params.category
    }, (err, result) => {

        if (err) {
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Product is Missing', 403, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Product Found Successfully', 200, result)
            res.send(apiResponse)
        }
    })
}

/**
 * function to read Products by author.
 */
let viewByManufacturer = (req, res) => {

    ProductModel.find({
        'manufacturer': req.params.manufacturer
    }, (err, result) => {

        if (err) {
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Product is Missing', 403, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Product Found Successfully', 200, result)
            res.send(apiResponse)
        }
    })
}

/**
 * function to edit Product by admin.
 */
let editProduct = (req, res) => {

    let options = req.body;
    console.log(options);
    ProductModel.update({
        'productId': req.params.productId
    }, options, {
        multi: true
    }).exec((err, result) => {

        if (err) {
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Product is Missing', 403, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Product Edited Successfully', 200, result)
            res.send(apiResponse)
        }
    })
}



/**
 * function to delete the assignment collection.
 */
let deleteProduct = (req, res) => {
    ProductModel.remove({
        'productId': req.params.productId
    }, (err, result) => {

        if (err) {
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Product is Missing', 403, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Product Deleted Sccessfully', 200, result)
            res.send(apiResponse)
        }
    })
}

/**
 * function to create the Product.
 */
let createProduct = (req, res) => {
    var today = Date.now()
    let productId = shortid.generate()

    let newProduct = new ProductModel({
        productId: productId,
        nameOfProduct: req.body.nameOfProduct,
        description: req.body.description,
        isOutOfStock: false,
        category: req.body.category,
        manufacturer: req.body.manufacturer,
        introducedToMarket: today
    }) // end new Product model

    let tags = (req.body.tags != undefined && req.body.tags != null && req.body.tags != '') ? req.body.tags.split(',') : []
    newProduct.tags = tags

    newProduct.save((err, result) => {
        if (err) {
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Product Created Successfully', 200, result)
            res.send(apiResponse)
        }
    }) // end new Product save
}

/**
 * function to increase views of a Product.
 */
let increaseProductView = (req, res) => {

    ProductModel.findOne({
        'productId': req.params.productId
    }, (err, result) => {

        if (err) {
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Product Not Found.', 404, null)
            res.send(apiResponse)
        } else {

            result.views += 1;
            result.save(function (err, result) {
                if (err) {
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured', 500, result)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Product Deleted Sccessfully', 200, result)
                    res.send(apiResponse)
                }
            }); // end result

        }
    })
}




module.exports = {
    getAllProduct: getAllProduct,
    createProduct: createProduct,
    viewByProductId: viewByProductId,
    viewByCategory: viewByCategory,
    viewByManufacturer: viewByManufacturer,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    increaseProductView: increaseProductView
}