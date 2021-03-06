import { START, SUCCESS, LOAD_SEARCH_FILMS, LOAD_FILM_INFO, CHANGE_STARS, CHANGE_FAVORITES} from '../../constants'
import {Record, OrderedMap, List} from 'immutable'

const FilmRecord = Record({
  Awards:undefined,
  Actors:undefined,
  Runtime:undefined,
  BoxOffice:undefined,
  Country:undefined,
  DVD:undefined,
  Director:undefined,
  Genre:undefined,
  Metascore:undefined,
  Plot:undefined,
  Poster:undefined,
  Production:undefined,
  Rated:undefined,
  Ratings:undefined,
  Released:undefined,
  Response:undefined,
  Title:undefined,
  Type:undefined,
  Website:undefined,
  Writer:undefined,
  Year:undefined,
  imdbID:undefined,
  imdbRating:undefined,
  imdbVotes:undefined,
  rating:undefined,
  addFilm:false
})

const ReducerState = new Record({
    search:new OrderedMap({}),
    ids:new OrderedMap({}),
    favoritesIds : new List(),
    addIds : new List(),
    textSearch:''
})

export default (stateFilms = new ReducerState(),action) => {
    const {type,payload} = action;
    switch (type){
        case LOAD_SEARCH_FILMS + START : {
            return stateFilms.set('textSearch',payload.film)
        }
        case LOAD_SEARCH_FILMS + SUCCESS : {
          return stateFilms.setIn(['search',payload.film],payload.res.Search)
        }
        case LOAD_FILM_INFO + START : {
          return stateFilms
        }
        case LOAD_FILM_INFO + SUCCESS : {
          return stateFilms.setIn(['ids',payload.id],new FilmRecord(payload.res),['ids',payload.id,"fullLoaded"],true)
        }
        case CHANGE_STARS : {
          const {favoritesIds} = stateFilms
          stateFilms = stateFilms.setIn(['ids',payload.id,"rating"],payload.rating)
          stateFilms = favoritesIds.includes(payload.id) ?
            payload.rating === undefined ? stateFilms.set("favoritesIds",favoritesIds.filter(elem => elem !== payload.id)) :
              stateFilms : stateFilms.set("favoritesIds",favoritesIds.push(payload.id))
          return stateFilms
        }
        case CHANGE_FAVORITES : {
          const {addIds} = stateFilms
          stateFilms = stateFilms.setIn(['ids',payload.id,"addFilm"],payload.addFilm, ['ids',payload.id,"rating"],payload.rating)
          stateFilms = addIds.includes(payload.id) ?
            payload.rating === undefined ? stateFilms.set("addIds",addIds.filter(elem => elem !== payload.id)) :
              stateFilms : stateFilms.set("addIds",addIds.push(payload.id))
          return stateFilms
        }
    }
    return stateFilms
}