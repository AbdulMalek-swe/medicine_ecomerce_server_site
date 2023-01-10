const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:[true,"please must provided product name"],
        trim:true,
        lowercase:true
    }
},{
    timestamps:true
})
const Product = mongoose.model("Product",productSchema)
module.exports = Product;