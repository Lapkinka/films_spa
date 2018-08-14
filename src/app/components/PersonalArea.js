import React, {Component} from 'react';
import {NavLink} from "react-router-dom"
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { loadFilmInfo } from '../AC'

class PersonalArea extends Component {
  static propTypes ={
    addIds:PropTypes.object,
    info:PropTypes.object,
    favoritesIds:PropTypes.object,
    loadFilmInfo:PropTypes.func
  }
  render() {
    const {addIds,favoritesIds,info} = this.props,
      titlesAdd = [],
      titlesFavorites = []
    addIds.forEach((elem,i) => titlesAdd.push(
        <li key={`add_${i}`}>
          <NavLink to = {`/search/area/${elem}`} activeStyle = {{color:"red"}}>{info.get(elem).Title}</NavLink>
        </li>))

    favoritesIds.forEach((elem,i) => titlesFavorites.push(
      <li key={`favorite_${i}`}>
        <NavLink to = {`/search/area/${elem}`} activeStyle = {{color:"red"}}>{info.get(elem).Title}</NavLink>
      </li>))
    return(
      <div className = "PersonalArea">
        <div>
          <ul className = "want_see">Want see:{titlesAdd.length ? titlesAdd : "No added items"}</ul>
        </div>
        <div>
          <ul className = "looked" >Looked:{titlesFavorites.length ? titlesFavorites : "No added items"}</ul>
        </div>
      </div>
    )
  }
}

export default connect(({searchReducer}) => ({
  addIds:searchReducer.addIds,
  info:searchReducer.ids,
  favoritesIds:searchReducer.favoritesIds}),{loadFilmInfo})(PersonalArea)
