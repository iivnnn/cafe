const {Router}= require("express")
const {allInventario, idInventario, saveInventario, updateInventario, deleteInventario}= require("../service/InventarioService")

const app= Router()
app.get("/allregistro", allInventario)
app.get("/idregistro/:id", idInventario)
app.post("/saveregisto", saveInventario),
app.put("/updateregistro/:id", updateInventario)
app.delete("/deleteregistro/:id", deleteInventario)

module.exports= app