import {ADD_FAV} from './actions'
import { REMOVE_FAV } from './actions'

import { addCharacter } from './actions'
import { removeCharacter } from './actions'


const initialState = {
    myFavorites: [],
}


const rootReducer = (state=initialState,{type, payload}) => {
     
   
   switch(type){

    case ADD_FAV:
        return {
            ...state,
             myFavorites: payload,
             allCharactersFav: payload
        }

    case REMOVE_FAV:
        return {
            ...state,
             myFavorites: payload
        }
    default:
        return {...state}

   }
    
}

export default rootReducer