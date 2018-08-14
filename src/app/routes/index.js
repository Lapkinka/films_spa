import React, {Component} from 'react';
import {Route,Switch,Redirect} from "react-router-dom"
import FilmPage from "../components/FilmPage"
import GetSearch from "../components/GetSeacrh"
import PersonalArea from '../components/PersonalArea'

class Films extends Component {
    render() {
        return (
            <div>
                <GetSearch/>
                <Switch>
                  <Route path = "/search/area/:id" render = {this.getFilmPage}/>
                  <Route path = "/search/area" component = {PersonalArea}/>
                  <Route path = "/search/:id" render = {this.getFilmPage}/>
                  <Route path = "*" render = {this.redirect}/>
                </Switch>
            </div>
        );
    }
    getFilmPage = ({match}) =>{
        const {path,params:{id}} = match
        if(path === "/search/area/:id"){
          return <div>
            <PersonalArea/>
            <FilmPage id = {id}/>
          </div>
        }
        else return <FilmPage id = {id}/>
    }
    redirect = ({match}) => match.isExact ? <Redirect to = "/search"/> : null
}

export default Films;
