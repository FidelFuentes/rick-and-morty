import axios from 'axios'
//import {ADD_FAV, REMOVE_FAV} from './actions'

export const ADD_FAV='ADD_FAV'

export const REMOVE_FAV='REMOVE_FAV'

export const addFav = (character) => {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
           try {
            const {data} = await axios.post(endpoint, character)
            
            if(!data.length) throw Error('No hay favoritos')
                
              return dispatch({
                 type: ADD_FAV,
                 payload: data,
              });
           
           } catch (error) {
               console.log(error.message)
           }
         
        };
     };

export const removeFav = (id) => {
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;

        
        return async (dispatch) => {
         try {
            const {data} = await axios.delete(endpoint)
            
         
           
              return dispatch({
                 type: REMOVE_FAV,
                 payload: data,
                 });
         
         } catch (error) {
            console.log(error.message)
         }
           
        };
     };


/* return function (dispatch){

        const URL_BASE='https://be-a-rym.up.railway.app/api';

        const KEY= 'a862860aa9c1.248781fdb180b07a7c72'
        fetch(`${URL_BASE}/character/?key=${KEY}`)
          .then((response) => response.json())
          .then((data) => dispatch({type: ADD_CHARACTER, payload: data}))
    }
} */