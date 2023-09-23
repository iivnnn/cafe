const mongoose= require("mongoose")

var product= new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        default: () => new mongoose.Types.ObjectId()
    },
    Nombre: String,
    Precio: Number,
    Cantidad: Number
})

module.exports= mongoose.model("Product", product)

