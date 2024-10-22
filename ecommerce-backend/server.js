const express=require("express")
const cors=require("cors")
const connectDB = require("./configuration/config")
const shirtrouter = require("./router/productrouter")
const userrouter = require("./router/userrouter")
const orderrouter = require("./router/orderrouter")
const app=express()
const port=5000
connectDB()
app.use(express.json())
app.use(cors({origin:"https://ecommerce-website-1-1xh7.onrender.com", credentials:true}))
app.use("/api",shirtrouter)
app.use("/users",userrouter)
app.use("/order",orderrouter)
app.listen(port,()=>{
  console.log("sever is runing")  
})




