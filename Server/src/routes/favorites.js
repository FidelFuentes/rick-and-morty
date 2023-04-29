const express = require('express')
const router = express.Router()

const {getAdd} =require("../controllers/favorites")

router.get('/:id', getAdd)


module.exports =router