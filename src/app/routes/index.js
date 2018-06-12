import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route,NavLink} from "react-router-dom"
import FilmPage from "../components/FilmPage"
import GetSearch from "../components/GetSeacrh"

class Films extends Component {
    render() {
        return (
            <div>
                <GetSearch/>
                <NavLink to = "">Search</NavLink>
                <Route path = "/:id" render = {this.getFilmPage}/>
            </div>
        );
    }
    getFilmPage = ({match}) =>{
        const {id} = match.params
        return <FilmPage id = {id}/>
    }
}

export default Films;
