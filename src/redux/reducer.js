import {ADD_CHARACTER} from './actions'
import { REMOVE_CHARACTER } from './actions'

import { addCharacter } from './actions'
import { removeCharacter } from './actions'


const initialState = {
    myFavorites: [],
}


const rootReducer = (state=initialState,action) => {
     
   
   switch(action.type){

    case ADD_CHARACTER:
        return {
            ...state, myFavorites: [...state.myFavorites, action.payload]
        }

    case REMOVE_CHARACTER:
        return {
            ...state, myFavorites: state.myFavorites.filter(
                (favorite) => favorite.id !== action.payload
            )
        }
    default:
        return {...state}

   }
    
}

export default rootReducer