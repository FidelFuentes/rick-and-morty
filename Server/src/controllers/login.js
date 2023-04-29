const users = require('../utils/users') // no puedo hacer destructuring por que es un objeto


const login = (req,res) => {
    const {email,password}=req.query
    
    const userFound = users.find((user) => user.email == email && user.password == password)

    return userFound ? res.status(200).json({ access: true}) : res.status(404).json({access: false})
    // pregunto tengo userfound? si es asi responde true SINO hace eso.
    
   // if(userFound) return res.status(200).json({ access: true})
   // return res.status(404).json({access: false})

}

module.exports ={
    login
}