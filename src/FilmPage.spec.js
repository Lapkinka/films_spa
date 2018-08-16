import React from 'react'
import { shallow } from 'enzyme'
import FilmPage from './app/components/FilmPage'
import configureStore from 'redux-mock-store'
import { OrderedMap, Record } from 'immutable'

describe('FilmPage container', () => {
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
  const initialState = {
    searchReducer: {
      ids: new OrderedMap({
        tt0152930: new FilmRecord({
          "Title": "Taxi",
          "Year": "1998",
          "Rated": "NOT RATED",
          "Released": "20 Nov 1998",
          "Runtime": "86 min",
          "Genre": "Action, Comedy, Crime",
          "Director": "Gérard Pirès",
          "Writer": "Luc Besson (scenario)",
          "Actors": "Samy Naceri, Frédéric Diefenthal, Marion Cotillard, Manuela Gourary",
          "Plot": "To work off his tarnished driving record, a hip taxi driver must chauffeur a loser police inspector on the trail of German bank robbers.",
          "Language": "French, German, Korean, Portuguese",
          "Country": "France",
          "Awards": "3 wins & 5 nominations.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMmViOGVjZWQtZmNmNS00MWU3LWFjNGEtMDc1MjNlY2ZlNjdiXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
          "Ratings": [{"Source": "Internet Movie Database", "Value": "7.0/10"}],
          "Metascore": "N/A",
          "imdbRating": "7.0",
          "imdbVotes": "68,472",
          "imdbID": "tt0152930",
          "Type": "movie",
          "DVD": "N/A",
          "BoxOffice": "N/A",
          "Production": "N/A",
          "Website": "N/A",
          "Response": "True"
        })
      }),
      id: 'tt0152930'
      // loadFilmInfo: () => {}
    }
  }
  const mockStore = configureStore();
  let store,container;

  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<FilmPage store={store} /> );
  })

  it('+++ render the connected(SMART) component', () => {
    expect(container.length).toEqual(1);
  });

  it('+++ check Prop matches with initialState output', () => {
    expect(container.prop('output')).toEqual(initialState.output);
    expect(container).toMatchSnapshot()
  });
  it('+++ check Prop matches with initialState searchReducer', () => {
    // expect(container.prop('searchReducer')).toEqual(initialState.searchReducer);
    expect(container.prop('searchReducer')).toEqual(initialState.searchReducer);
    expect(container).toMatchSnapshot()
  });
  it('+++ check Prop matches with initialState tt0152930', () => {
    expect(container.prop('tt0152930')).toEqual(initialState.searchReducer.ids.tt0152930);
    expect(container).toMatchSnapshot()
  });
  it('+++ check Prop matches with initialState id', () => {
    expect(container.prop('id')).toEqual(initialState.id);
    expect(container).toMatchSnapshot()
  });
  it('+++ check Prop matches with initialState ids', () => {
    expect(container.prop('ids')).toEqual(initialState.searchReducer.ids);
    expect(container).toMatchSnapshot()
  });
  it('render initial_1 initialState',() =>{
    // expect(container.type).toBe("[Function FilmPage]")
    expect(container.type).toEqual("[Function FilmPage]")
    expect(container).toMatchSnapshot()
  })
  it('render AddFavorites',() =>{
    expect(container.find('AddFavorites')).toHaveLength(0)
  })
  it('render ChangeStars',() =>{
    expect(container.find('ChangeStars')).toHaveLength(0)
  })
})