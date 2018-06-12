import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {loadFilmInfo} from "../AC"
import filmInfo from "../reducers/filmInfo";

class FilmPage extends Component {
    static propTypes ={
        id:PropTypes.string,
        loadFilmInfo:PropTypes.func,
        info:PropTypes.object
    }
    componentWillMount(){
        const {id,loadFilmInfo} = this.props
        loadFilmInfo(id)
    }
    componentWillUpdate(nextProps,nextState){
        const {id,info,loadFilmInfo} = nextProps
        if(info === undefined) loadFilmInfo(id)
    }

    render() {
        const {info} = this.props
        if(!info) return null
        return (
            <div className={"filmInfo"}>
                <div className={"poster"}>
                    <img src={info.Poster}/>
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
                </div>
                <div className={"text"}>
                    <div>{info.Plot}</div>
                </div>
            </div>
        );
    }
}

export default connect((state,ownProps) => ({info:state.filmInfo[ownProps.id]}),{loadFilmInfo})(FilmPage)


