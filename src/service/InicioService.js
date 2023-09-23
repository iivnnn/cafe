const User= require("../model/Client")
const mongoose= require("mongoose")

const services= {
    inicio: async (req, res) => {
        var user= await User.find()
        res.render("layouts/index", {"test": user})
    },
    allProducts: async (req, res)=> {
        var bodyData= await User.find()
        res.json(bodyData)
    },
    productId: async (req, res)=> {
        var id= req.params.id
        const user= await User.findOne({_id: id})
        res.json(user)
    },
    updateProduct: async (req, res) => {
        var id= req.params.id;
        var body= req.body
        console.log(id, body)
        //var userModify= await User.findOneAndUpdate({Nombre: 'Ivan', Correo: 'ivan@gmail.com'}, {Nombre: 'ivanModify', Correo: 'ivanModify@gmail.com'})
        var userModify= await User.findByIdAndUpdate(id, body)
        res.json({"userModify": userModify})
    },
    saveProduct: async (req, res)=> {
       var {Nombre, Correo}= req.body
       console.log(Nombre, Correo)
       var newUser= new User({
           Nombre: Nombre,
           Correo: Correo
       })
       newUser.save()
       res.send("save successfully")
    }, 
    deleteProduct: async (req, res)=> {
      //var userDelete= User.deleteOne({_id: '650c0ea32aae69eb626ad6e3'})  
      console.log("deleting?")
      var {id}= req.params
      var userDelete= await User.deleteOne({"_id": id})   
      res.json(userDelete)
    }
}
module.exports= services
