import React from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import styles from './Detail.module.css'
const Detail =() =>{
    
    const {detailId} =useParams()
    const [character,setCharacter] = useState({})
   
    

     useEffect(() => {
        const URL_BASE='https://be-a-rym.up.railway.app/api';

        const KEY= 'a862860aa9c1.248781fdb180b07a7c72'
        fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
          .then((response) => response.json())
          .then((char) => {  setCharacter(char)  } )
      }, []);

    return(
        <div className={styles.container}>
            {
                character.name ? (
                    <div className={styles.cont}>
                    <h1> {character.name} </h1>
                    <h2> {character.status}</h2>
                    <h2> {character.species}</h2>
                    <h2> {character.gender}</h2>
                    <h2>{character.origin?.name}</h2>
                    <img src={character.image} alt="" />

                </div>
                ) : (
                    <h3>Loading...</h3>
                )

            }


        </div>
    )
}

export default Detail