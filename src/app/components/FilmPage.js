import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {loadFilmInfo} from "../AC"
import ChangeStars from './ChangeStars'
import AddFavorites from './AddFavorites'
import InlineSVG from 'svg-inline-react';
import {svgSource} from '../helpers/helpers'

class FilmPage extends Component {
    static propTypes ={
        id:PropTypes.string,
        loadFilmInfo:PropTypes.func,
        info:PropTypes.object
    }
    componentDidMount(){
      const{info,loadFilmInfo,id} = this.props, thisFilm = info.get(id)
      if(!thisFilm) loadFilmInfo(id)
    }
    componentWillUpdate(nextProps,nextState){
      const {id,info,loadFilmInfo} = nextProps, thisFilm = info.get(id)
      if(!thisFilm) loadFilmInfo(id)
    }

    render() {
        const {info,id} = this.props, thisFilm = info.get(id)
        if(!thisFilm) return <InlineSVG src={svgSource} />
        return (
            <div className={"filmInfo"}>
                <div className={"poster"}>
                    <div><img className = {thisFilm.Poster === "N/A" ? "minContainer" : ""} src={thisFilm.Poster}/></div>
                    <AddFavorites id = {id}/>
                </div>
                <div className={"description"}>
                    <div>Title:{thisFilm.Title}</div>
                    <div>Country:{thisFilm.Country}</div>
                    <div>Actors:{thisFilm.Actors}</div>
                    <div>Genre:{thisFilm.Genre}</div>
                    <div>Awards:{thisFilm.Awards}</div>
                    <div>Type:{thisFilm.Type}</div>
                    <div>Released:{thisFilm.Released}</div>
                    <div>Runtime:{thisFilm.Runtime}</div>
                    <ChangeStars id = {id}/>
                </div>
                <div className={"text"}>
                    <div>{thisFilm.Plot}</div>
                </div>
            </div>
        );
    }
}

export default connect(({searchReducer},ownProps) => ({info:searchReducer.ids}),{loadFilmInfo})(FilmPage)


