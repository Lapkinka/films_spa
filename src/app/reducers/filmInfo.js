import {START,SUCCESS,LOAD_FILM_INFO} from "../../constants"

export default (infoFilm = {},action) => {
    const {type,payload} = action;
    switch (type){
        case LOAD_FILM_INFO + START : {
            return infoFilm
        }
        case LOAD_FILM_INFO + SUCCESS : {
            const infoFilmCopy = {...infoFilm}
            infoFilmCopy[payload.id] = {...payload.res}
            return infoFilmCopy
        }
    }
    return infoFilm
}