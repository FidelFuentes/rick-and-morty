const express = require('express');
const app = express();
const logger = require("morgan")

const routes= require('../routes/index')

app.use(express.json()) // middleware para trabajar put y post desde el body

const urlencoded= express.urlencoded({extended:false}) // middleware: los datos que voy a trabajar son sencillos, no arrays anidados.
// recibo datos de formularios con el urlen


app.use((req,res,next) => {
    res.header('Accesss-Control-Allow-Origin', '*')
    res.header('Accesss-Control-Allow-Credentials', true)
    res.header("Accesss-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
    res.header('Accesss-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE')
    next()
})

app.use(logger("dev"))

app.use("/rickandmorty", routes)


module.exports= app