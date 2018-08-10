import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {loadFilmInfo} from "../AC"
import ChangeStars from './ChangeStars'
import AddFavorites from './AddFavorites'

class FilmPage extends Component {
    static propTypes ={
        id:PropTypes.string,
        loadFilmInfo:PropTypes.func,
        info:PropTypes.object
    }
    componentDidMount(){
        console.log("componentDidMount")
        this.props.loadFilmInfo(this.props.id)
    }
    // componentWillMount(){
    //     console.log("componentWillMount")
    //     this.props.loadFilmInfo(this.props.id)
    // }
    componentWillUpdate(nextProps,nextState){
      const {id,info,loadFilmInfo} = nextProps
      if(!info ) loadFilmInfo(id)
    }

    render() {
        const {info,id} = this.props
        if(!info) return null
        return (
            <div className={"filmInfo"}>
                <div className={"poster"}>
                    <div><img className = {info.Poster === "N/A" ? "minContainer" : ""} src={info.Poster}/></div>
                    <AddFavorites id = {id}/>
                </div>
                <div className={"description"}>
                    <div>Title:{info.Title}</div>
                    <div>Country:{info.Country}</div>
                    <div>Actors:{info.Actors}</div>
                    <div>Genre:{info.Genre}</div>
                    <div>Awards:{info.Awards}</div>
                    <div>Type:{info.Type}</div>
                    <div>Released:{info.Released}</div>
                    <div>Runtime:{info.Runtime}</div>
                    <ChangeStars id = {id}/>
                </div>
                <div className={"text"}>
                    <div>{info.Plot}</div>
                </div>
            </div>
        );
    }
}

export default connect(({searchReducer},ownProps) => ({info:searchReducer.ids.get(ownProps.id)}),{loadFilmInfo})(FilmPage)


