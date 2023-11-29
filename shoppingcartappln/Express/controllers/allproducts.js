const express = require('express');
const router = require('express').Router;

const asyncHandler = require('express-async-handler');
const {default : mongoose} = require('mongoose');

const Products = require('../models/Products').Products;


router.post('/products', asyncHandler(async (req,res) => {
    const products = await Products.find();
    res.json(products);
}))

router.post('/products/:pname', asyncHandler(async (req, res) =>{
    // email, password
    let product = await Products.findOne({pname: req.body.pname})
    // res db -> name, email, hashed_password
    
    if (pname === null) {
        return res.status(400).json({
          message: "Product not found.",
        });
      } else {
        return res.status(200).json({
            message: "Product found in list..."
       });
        }
}))


module.exports = router;