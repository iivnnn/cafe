const product= require("../model/Product")

const productService= {
    allProduct: async (req, res)=> {
       var body= await product.find()
       res.json(body)
    },
    idProduct: async (req, res)=> {
       var id= req.params.id 
       var body= await product.findById(id)
       res.json(body)
    },
    saveProduct: async (req, res)=> {
       var {Nombre, Precio, Cantidad}= req.body 
       console.log(Nombre, Precio, Cantidad)
       var bodySave= new product({
           Nombre,
           Precio,
           Cantidad
       })
       await bodySave.save()
       res.send("saved product")
    },
    updateProduct: async (req, res)=> {
       var id= req.params.id 
       var bodyUpdate= req.body      
       console.log(bodyUpdate)
       var body= await product.findByIdAndUpdate(id, bodyUpdate)
       res.json(body)
    },
    deleteProduct: async (req, res)=> {
       var id= req.params.id
       var body= await product.findByIdAndDelete(id) 
       res.send("product deleted")
    }
}

module.exports= productService