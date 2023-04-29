import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav } from '../../redux/actions';
import { removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character) =>{
         dispatch(addFav(character))
      },
      removeFav: (id) =>{
         dispatch(removeFav(id))
      }

   }
}

const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites,
   }
}

 function Card({id,name, species,gender,image,onClose,addFav,removeFav,myFavorites,}) {

   const [isFav,setIsFav] = useState(false)
   
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)

      }
      else {
         setIsFav(true)
         addFav({id,name, species,gender,image,onClose,addFav,removeFav})
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