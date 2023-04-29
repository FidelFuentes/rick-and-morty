
const axios = require('axios')

const URL_BASE='https://be-a-rym.up.railway.app/api';

const KEY= 'a862860aa9c1.248781fdb180b07a7c72'

const getChardDetail= (res,id) => {
    axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
.then((response) =>{ 
    const {name,gender,status,origin,species,image} = response.data
    res.writeHead(200,{"Content-Type": 'application/json'})
    res.end(JSON.stringify({name,gender,status,origin,species,image}))
})
.catch((error) =>{
    res.writeHead(500,{"Content-Type": 'text/plain'})
    res.end(error.message)
})
}


module.exports = getChardDetail




