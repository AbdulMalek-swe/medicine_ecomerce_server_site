const { default: mongoose } = require("mongoose")

module.exports.db = ()=>{
    mongoose.connect('mongodb://localhost:27017/inventoryProduct')
    .then(res=>{
        console.log("connect succesfully")
    })
    .catch(error=>console.log(error.message))  
}