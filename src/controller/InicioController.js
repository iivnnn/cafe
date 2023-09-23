const {Router}= require("express")
const {inicio, productId, updateProduct, saveProduct, deleteProduct, allProducts}= require("../service/InicioService")

const app= Router()
app.get("/", inicio)
app.get("/allusers", allProducts)
app.get("/userid/:id", productId)
app.post("/saveuser", saveProduct)
app.put("/updateuser/:id", updateProduct)
app.delete("/deleteuser/:id", deleteProduct)

module.exports= app



