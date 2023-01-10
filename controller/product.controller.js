const { addProductService,
    getProductService } = require("../service/product.service");
module.exports.getProduct = async(req,res)=>{
 try{   
     const product = await getProductService();
     res.status(200).json({
        message:"successfully added data",
        data:product
     })
 }
 catch(error){
    res.status(400).json({
        message:"fail to fetch data",
        data:error.message
     })
 }
}
module.exports.addProduct = async(req,res)=>{
    try{
        const product = req.body;
        const result = await addProductService(product);
        res.status(200).json({
           message:"successfully added data",
           data:result
        })
    }
    catch(error){
       res.status(400).json({
           message:"fail to added data",
           data:error.message
        })
    }
   }