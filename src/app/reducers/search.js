import {START,SUCCESS,LOAD_SEARCH_FILMS} from "../../constants"

const defaultSettings = {
    filmsArr:[],
    textSearch:''
}

export default (stateFilms = defaultSettings,action) => {
    const {type,payload} = action;
    switch (type){
        case LOAD_SEARCH_FILMS + START : {
            stateFilms.textSearch = payload.film
            return stateFilms
        }
        case LOAD_SEARCH_FILMS + SUCCESS : {
            const stateFilmsCopy = {...stateFilms}
            stateFilmsCopy.filmsArr = payload.res.Search
            return stateFilmsCopy
        }
    }
    return stateFilms
}