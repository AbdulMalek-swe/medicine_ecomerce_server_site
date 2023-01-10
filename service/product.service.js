const Product = require("../model/product.model");

module.exports.addProductService =async(productData)=>{
   return await Product(productData).save();
}
module.exports.getProductService =async()=>{
    return await Product.find({});
 }