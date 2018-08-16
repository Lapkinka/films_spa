import React, {Component} from 'react';
import {Route,Switch,Redirect} from "react-router-dom"
import FilmPage from "../components/FilmPage"
import GetSearch from "../components/GetSearch"
import PersonalArea from '../components/PersonalArea'

class Films extends Component {
    render() {
        return (
            <div>
                <Switch>
                  <Route path = "/search/area/:id" render = {this.getAreaPageWithFilm}/>
                  <Route path = "/search/area" render = {this.getAreaPageWithFilm}/>
                  <Route path = "/search/:id" render = {this.getAreaPageWithFilm}/>
                  <Route path = "/search" component = {GetSearch}/>
                  <Redirect from = "*" to = "/search"/>
                </Switch>
            </div>
        );
    }
    getAreaPageWithFilm = ({match}) =>{
      const {path,params:{id}} = match
      switch (path){
        case "/search/:id":{
          return <div>
            <GetSearch/>
            <FilmPage id = {id}/>
          </div>
        }
        case "/search/area":{
          return <div>
            <GetSearch/>
            <PersonalArea/>
          </div>
        }
        case "/search/area/:id":{
          return <div>
            <GetSearch/>
            <PersonalArea/>
            <FilmPage id = {id}/>
          </div>
        }
      }
    }
}

export default Films;
