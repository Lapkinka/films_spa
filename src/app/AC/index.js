import {START,SUCCESS,FAIL,LOAD_SEARCH_FILMS,LOAD_FILM_INFO} from "../../constants"

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

export function loadFilmInfo(id) {
    return (dispatch) =>{
        dispatch({
            type:LOAD_FILM_INFO + START,
            payload: { id }
        })
        fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=787b3b6f`)
            .then(res => res.json())
            .then(res => dispatch({
                type:LOAD_FILM_INFO + SUCCESS,
                payload:{ id,res }
            }))
            .catch(err => dispatch({
                type:LOAD_FILM_INFO + FAIL,
                payload:{ id,err }
            }))
    }
}