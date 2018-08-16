import React from 'react'
import { shallow } from 'enzyme'
import FilmPage from './app/components/FilmPage'
import configureStore from 'redux-mock-store'

describe('FilmPage container', () => {
  const initialState = {
    searchReducer:{
      id:'tt0152930',
      ids:{"Title":"Taxi","Year":"1998","Rated":"NOT RATED","Released":"20 Nov 1998","Runtime":"86 min","Genre":"Action, Comedy, Crime","Director":"Gérard Pirès","Writer":"Luc Besson (scenario)","Actors":"Samy Naceri, Frédéric Diefenthal, Marion Cotillard, Manuela Gourary","Plot":"To work off his tarnished driving record, a hip taxi driver must chauffeur a loser police inspector on the trail of German bank robbers.","Language":"French, German, Korean, Portuguese","Country":"France","Awards":"3 wins & 5 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMmViOGVjZWQtZmNmNS00MWU3LWFjNGEtMDc1MjNlY2ZlNjdiXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"}],"Metascore":"N/A","imdbRating":"7.0","imdbVotes":"68,472","imdbID":"tt0152930","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}
    },
    loadFilmInfo: () => {}
  }
  const mockStore = configureStore();
  let store,container;


  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<FilmPage store={store} /> );
  })

  // describe('FilmPage container initial',() =>{
  //   const FilmPage = shallow(<FilmPage store = {props}/>).dive()
  //
  //   it('render initial',() =>{
  //     expect(FilmPage.find('p')).toHaveLength(1)
  //   })
  // })

  it('+++ render the connected(SMART) component', () => {
    console.log("container.debug():",container);
    expect(container.length).toEqual(1);
  });

  it('+++ check Prop matches with initialState', () => {
    expect(container.prop('output')).toEqual(initialState.output);
  });

  it('render initial_1',() =>{
    expect(container.find('.filmInfo')).toHaveLength(1)
  })
  it('render initial_2',() =>{
    expect(container.find('.filmInfo')).toHaveLength(0)
  })
  it('render initial_3',() =>{
    expect(container.find('AddFavorites')).toHaveLength(1)
  })
  // it('render initial',() =>{
  //   expect(container.find('.filmInfo')).toHaveLength(1)
  // })


  // describe('FilmPage container initial',() =>{
  //   const FilmPage = shallow(<FilmPage store = {props}/>).dive()
  //
  //   it('render initial',() =>{
  //     expect(FilmPage.find('p')).toHaveLength(1)
  //   })
  // })
  // здесь будут будущие it

})