const express = require('express');
const server = express();
const PORT = 3001;
const router =require('./routes/index')
const morgan = require('morgan')

server.use(express.json())
server.use(morgan('dev'))

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use('/rickandmorty', router)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});



/*
const http = require('http')

const getCharById = require('./controllers/getCharById')
const getChardDetail = require('./controllers/getChardDetail')

http 
.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
   

    if (url.includes("onsearch")){
        // res.end('me esta andando el server')
       const id = url.split('/').at(-1) //saco el id.
         //res.end(id) corroboro en insomnia si me llega el id
         //llamo a la funcion getchard
         getCharById(res,id)
    }

    if (url.includes('detail')){
        const id = url.split('/').at(-1)
        getChardDetail(res,id)
    }


})
.listen(3001,'localhost')



/*
const data = require('./utils/data')
 if (url.includes("/rickandmorty/character")){
        const id = url.split('/').pop(); // puedo hacer .at(-1)

        const character = data.find(character => character.id === parseInt(id)) // podia hacer == id para solucionar el problema de id y number.
        if(character){
            res.setHeader('Content-type', 'application/json')
            return res.end(JSON.stringify(character))
        } else{
            //res.statusCode = 404
           // return res.end('Personaje no encontrado')

            res.writeHead(200,{'ContentType':'application/json'})
             return res.end(JSON.stringify({error:'character not found'}))
        }

    } else {
        res.statusCode = 404
        return res.end('Recurso no encontrado')
    }
*/