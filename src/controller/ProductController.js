const {Router}= require("express")
const {allProduct, idProduct, saveProduct, deleteProduct, updateProduct}= require("../service/ProductoService")

const app= Router()
app.get("/allproducts", allProduct)
app.get("/idproduct/:id", idProduct)
app.delete("/deleteproduct/:id", deleteProduct)
app.put("/updateproduct/:id", updateProduct)
app.post("/saveproduct", saveProduct)

module.exports= app

