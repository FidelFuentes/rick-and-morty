

export const ADD_CHARACTER='ADD_CHARACTER'

export const REMOVE_CHARACTER='REMOVE_CHARACTER'

export const addCharacter =( character) => {
   return {type: ADD_CHARACTER , payload: character}
}
export const removeCharacter = (id) => {
        return {type: REMOVE_CHARACTER , payload: id}
}



/* return function (dispatch){

        const URL_BASE='https://be-a-rym.up.railway.app/api';

        const KEY= 'a862860aa9c1.248781fdb180b07a7c72'
        fetch(`${URL_BASE}/character/?key=${KEY}`)
          .then((response) => response.json())
          .then((data) => dispatch({type: ADD_CHARACTER, payload: data}))
    }
} */