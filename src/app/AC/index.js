import {START,SUCCESS,FAIL,LOAD_SEARCH_FILMS} from "../../constants"

export function loadSearchFilms(film) {
    return (dispatch) =>{
        dispatch({
            type:LOAD_SEARCH_FILMS + START,
            payload:{ film }
        })
        fetch(`https://www.omdbapi.com/?s=${film}&plot=full&apikey=787b3b6f`)
            .then(res => res.json())
            .then(res => dispatch({
                type:LOAD_SEARCH_FILMS + SUCCESS,
                payload: {film,res}
            }))
            .catch(err => dispatch({
                type:LOAD_SEARCH_FILMS + FAIL,
                payload:{film,err}
            }))

    }
}