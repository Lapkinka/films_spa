import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
import {loadSearchFilms} from "../AC";
import GetFilmsInSearch from "./GetFilmsInSearch"

class GetSearch extends Component {
    static propTypes = {
      filmsArr:PropTypes.array,
      textSearch:PropTypes.string,
      loadSearchFilms:PropTypes.func
    }

    render() {
      const {filmsArr,textSearch} = this.props
        return (
            <div className={"search_container"}>
              <NavLink to = "/search" onClick={this.clear}>Clear:</NavLink>
              <input value = {textSearch}
                     onChange={this.getRequest}/>
              <NavLink to="/search/area">PersonalArea</NavLink>
              <div>
                <GetFilmsInSearch filmsArr = {filmsArr}/>
              </div>
            </div>
        );
    }
    getRequest = ev =>{
        const {value} = ev.target;
        this.props.loadSearchFilms(value)
    };
    clear = () => this.props.loadSearchFilms("")
}
export default connect(({searchReducer}) =>({
    filmsArr:searchReducer.search.get(searchReducer.textSearch),
    textSearch:searchReducer.textSearch
}),{loadSearchFilms})(GetSearch);
