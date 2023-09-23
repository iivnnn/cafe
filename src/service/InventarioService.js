const inventario= require("../model/Inventario")
const {weatherApi}= require("../utils/clima")
var serviceInventario= {
    allInventario: async (req, res)=> {
       var body= await inventario.find()
       res.json(body)
    },
    idInventario: async (req, res)=> {
       var id= req.params.id
       var body= await inventario.findById(id) 
       res.json(body)
    },
    saveInventario: async (req, res)=> {
      try{
        var {id_Product, id_Client, cantidad}= req.body  
      var conditionTime= await weatherApi("bogota")
      var clima= conditionTime.text + "-" +conditionTime.code
      console.log(clima)
      var bodySave= new inventario({
        id_Product,
        id_Client,
        clima,
        cantidad
      }) 
      await bodySave.save()
      res.send("saved product")
      }catch(e){
      res.send("algo salio mal ")    
      }
      
    },
    updateInventario: async (req, res)=> {  
      var id= req.params.id  
      var bodySave= req.body
      var body= await inventario.findByIdAndUpdate(id, bodySave)
      res.json(body)
    },
    deleteInventario: async (req, res)=> {
      var id= req.params.id
      var deleted= await inventario.deleteOne({_id: id})
      res.send(deleted)
    }
}

module.exports= serviceInventario