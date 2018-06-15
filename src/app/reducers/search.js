import { START, SUCCESS, LOAD_SEARCH_FILMS, LOAD_FILM_INFO } from '../../constants'
import {Record, OrderedMap} from 'immutable'

const ReducerState = new Record({
    search:new OrderedMap({}),
    ids:new OrderedMap({}),
    textSearch:''
})

export default (stateFilms = new ReducerState(),action) => {
    const {type,payload} = action;
    switch (type){
        case LOAD_SEARCH_FILMS + START : {
            return stateFilms.set('textSearch',payload.film)
        }
        case LOAD_SEARCH_FILMS + SUCCESS : {
          payload.res.Search.forEach(elem =>{
            stateFilms = stateFilms.setIn(['ids',elem.imdbID],elem)
          })
          stateFilms = stateFilms.setIn(['search',payload.film],payload.res.Search)
          return stateFilms
        }
        case LOAD_FILM_INFO + START : {
          return stateFilms
        }
        case LOAD_FILM_INFO + SUCCESS : {
          return stateFilms.setIn(['ids',payload.id],payload.res)
        }
    }
    return stateFilms
}