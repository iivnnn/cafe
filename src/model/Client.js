const mongoose= require("mongoose")


const user= new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        default: () => new mongoose.Types.ObjectId()
    },
    Nombre: String,
    Correo: String
})

module.exports= mongoose.model("User", user)