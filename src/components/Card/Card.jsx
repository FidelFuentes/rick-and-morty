import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addCharacter } from '../../redux/actions';
import { removeCharacter } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const mapDispatchToProps = (dispatch) =>{
   return {
      addCharacter: (character) =>{
         dispatch(addCharacter(character))
      },
      removeCharacter: (id) =>{
         dispatch(removeCharacter(id))
      }

   }
}

const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites,
   }
}

 function Card({id,name, species,gender,image,onClose,addCharacter,removeCharacter,myFavorites,}) {

   const [isFav,setIsFav] = useState(false)
   
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeCharacter(id)

      }
      else {
         setIsFav(true)
         addCharacter({id,name, species,gender,image,onClose,addCharacter,removeCharacter})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>

{
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}

         <button className={styles.button} onClick={()=>onClose(id)}>Desmaterializar</button>
         <Link to={`/detail/${id}`} >
         <h2 className={styles.h2}>{name}</h2>
         </Link>
         
         <img  src={image} alt="" /> 
         <div className={styles.gender}>
         <h2 className={styles.human} >{species}</h2>
         <h2 className={styles.human} >{gender}</h2>
         </div>
         
        
      </div>
   );
}

export default connect(mapStateToProps,mapDispatchToProps)(Card) 