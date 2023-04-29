import { useState } from 'react';
import styles from './SearchBar.module.css'


export default function SearchBar({ onSearch }) {


   const [id,setId] = useState('')

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (

      <div className={styles.container}>
         <input type='search'    onChange={handleChange} />

      <button className={styles.button} onClick={()=>onSearch(id)}>Agregar</button>

      
      </div>
   );
}
