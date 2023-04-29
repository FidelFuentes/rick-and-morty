import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

function App () {

  const [characters,setCharacters] =useState([])

  const [access,setAccess]=useState(false)
  
  const navigate = useNavigate()
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

 const email = 'fidelfuentes.fullstack@gmail.com'
 const password= 'hola123'
const URL = 'http://localhost:3001/rickandmorty/login/';


 const  login= async (userData) => {

  try {
    const { email, password } = userData;
  
     const {data}= await axios(URL + `?email=${email}&password=${password}`)
  
     const { access } = data;
     setAccess(access);
     access && navigate('/home');
  
  } catch (error) {
    console.log(error.message)
  }
  
}

useEffect(()=>{
  !access && navigate('/')
},[access])

  const onClose=(id)=>{

    setCharacters(
      characters.filter((character)=> (character.id !== id))
    )
    
      
    
  }

  
  const onSearch = async (id)=> {
    const URL_BASE='http://localhost:3001/rickandmorty/'

    try {
      const {data} = await axios(`${URL_BASE}/character/${id}`)
       
          if (data.name && !characters.find(character => character.id === data.id)) {
             setCharacters((oldChars) => [...oldChars, data]);
          } 
 
    } catch (error) {
     alert('No hay personajes con ese ID');
          
    }
  } 

const location = useLocation()
 
  return (
    
    <div className='App' style={{ padding: '25px' }}>
     
     
     {location.pathname !== '/' &&  <Nav  onSearch={onSearch}/>}
        
     
     
     
      <Routes>

        <Route path='/favorites' element= {<Favorites />}></Route>

        <Route path="/home" element={<Cards
          characters={characters} onClose={onClose}/> }>
         
        </Route>
        <Route path="/about" element={<About />} />
        
        <Route path='/detail/:detailId' element={<Detail />} />

        <Route path="/" element={<Form login={login} />} ></Route>
      
      </Routes>
       
      
       
      

      
    
    </div>
  )
}

export default App





/* 
 


<div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div> */