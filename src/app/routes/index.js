import React, {Component} from 'react';
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
                  <Route path = "/area/:id" render = {this.getFilmPage}/>
                  <Route path = "/area" component = {PersonalArea}/>
                  <Route path = "/:id" render = {this.getFilmPage}/>
                </Switch>
            </div>
        );
    }
    getFilmPage = ({match}) =>{
        const {path,params:{id}} = match
        if(path === "/area/:id"){
          return <div>
            <PersonalArea/>
            <FilmPage id = {id}/>
          </div>
        }
        else return <FilmPage id = {id}/>
    }
}

export default Films;
