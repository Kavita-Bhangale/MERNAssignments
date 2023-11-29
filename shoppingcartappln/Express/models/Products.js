const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    pname:{
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    mfg:{
        type : String,
        required : true
    }
})

module.exports.Products = mongoose.model('Products',ProductsSchema);