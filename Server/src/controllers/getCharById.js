const axios = require('axios');
const { response } = require('express');

const URL='https://rickandmortyapi.com/api/character';

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`${URL}/${id}`);
    const character = response.data;
    const { id: charId, name, gender, species, image } = character;

    if (character) {
      return res.status(200).json({
        id: charId,
        name,
        gender,
        species,
        image
      });
    } else {
      return res.status(404).send('Not Found');
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = { getCharById };
/*
const axios = require('axios')

const URL_BASE='https://be-a-rym.up.railway.app/api';

const KEY= 'a862860aa9c1.248781fdb180b07a7c72'

const getCharById = (res, id) =>{
axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
.then((response) =>{ 
    const {id,name,gender,species,image} = response.data
    res.writeHead(200,{"Content-Type": 'application/json'})
    res.end(JSON.stringify({id,name,gender,species,image}))
})
.catch((error) =>{
    res.writeHead(500,{"Content-Type": 'text/plain'})
    res.end(error.message)
})
}

module.exports= getCharById

*/