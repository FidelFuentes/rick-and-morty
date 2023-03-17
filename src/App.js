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

function App () {

  const [characters,setCharacters] =useState([])

  const [access,setAccess]=useState(false)
  
  const navigate = useNavigate()
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  //credenciales fake
  const username = 'fidelfuentes.fullstack@gmail.com'
  const password = 'hola123'

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   } else{
    alert('NO SOS VOS')
   }
  }

  const onClose=(id)=>{

    setCharacters(
      characters.filter((character)=> (character.id !== id))
    )
    
      
    
  }

  
  const onSearch = (id)=> {
    const URL_BASE='https://be-a-rym.up.railway.app/api';

    const KEY= 'a862860aa9c1.248781fdb180b07a7c72'

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)

       .then((response) => response.json())

       .then((data) => {
          if (data.name && !characters.find(character => character.id === data.id)) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
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