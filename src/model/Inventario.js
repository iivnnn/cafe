const mongoose= require("mongoose")

const inventario= new mongoose.Schema({
  _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
      required: true
  },
  id_Product: String,
  id_Client: String,
  clima: String,
  cantidad: Number
})

module.exports= mongoose.model("Inventario", inventario)

