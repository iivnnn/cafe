const express= require("express")
const app= express()
const inicio = require("./controller/InicioController")
const product= require("./controller/ProductController")
const inventario= require("./controller/InventarioController")
const {create}= require("express-handlebars")
const path= require("path")
const morgan= require("morgan")
const options= require("./utils/config")
const clima= require("./utils/clima")
const db= require("./db/db")
const cors= require("cors")

app.use(morgan("combined"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.set("PORT", options.port)
app.set("views", options.views)
app.engine(".hbs", create({
   extname: '.hbs',
   layoutsDir: path.join(app.get("views"), "layouts"),
   partialsDir: path.join(app.get("views"), "partials"),
   defaultLayout: options.defaultView
}).engine)
app.set("view engine", ".hbs")

app.use("/cafelabs", inicio)
app.use("/cafe", inventario)
app.use("/cafe", product)

app.listen(app.get("PORT"), () => {
    console.log("Server initialized in port: ", app.get("PORT"))
})

