import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route,Switch} from "react-router-dom"
import FilmPage from "../components/FilmPage"
import GetSearch from "../components/GetSeacrh"
import PersonalArea from '../components/PersonalArea'

class Films extends Component {
    render() {
        return (
            <div>
                <GetSearch/>
                <Switch>
                  <Route path = "/:id" render = {this.getFilmPage}/>
                  <Route path = "/area" component = {PersonalArea}/>
                </Switch>
            </div>
        );
    }
    getFilmPage = ({match}) =>{
        const {id} = match.params
        return <FilmPage id = {id}/>
    }
}

export default Films;
