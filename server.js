const { default: mongoose } = require("mongoose");
const { db } = require("./utils/db.connect");
mongoose.set('strictQuery', true)
db()    
const app = require("./app");
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`RUNNING ON PORT ${PORT}`)
})
