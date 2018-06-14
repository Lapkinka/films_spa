import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
import {loadSearchFilms} from "../AC";
import GetFilmsInSearch from "./GetFilmsInSearch"

class GetSearch extends Component {
    static propTypes = {
        filmsArr:PropTypes.array,
        textSearch:PropTypes.string
    }

    render() {
        return (
            <div className={"search_container"}>
                <NavLink to = "" onClick={this.clear}>Clear:</NavLink>
                <input value = {this.props.textSearch}
                       onChange={this.getRequest}/>
                <GetFilmsInSearch filmsArr = {this.props.filmsArr}/>
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
    filmsArr:searchReducer.filmsArr,
    textSearch:searchReducer.textSearch
}),{loadSearchFilms})(GetSearch);
