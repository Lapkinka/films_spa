import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom"

class GetFilmsInSearch extends Component {
    static propTypes = {
        filmsArr:PropTypes.array
    }
    render() {
        const {filmsArr} = this.props,
            TYPES = ['movie','series'],
            result = {}
            console.log("filmsArr",filmsArr)
        if(!filmsArr) return null
        TYPES.forEach(type =>{
            result[type] = filmsArr.filter(elem => elem.Type === type).map((elem,i) => {
                return !i ?
                    <div key={type + i}>
                        <div className={'type_elem'}>{type === TYPES[0] ? "movies" : type}</div>
                        <div><NavLink to = {`/${elem.imdbID}`} activeStyle = {{color:"red"}}>{`${elem.Title} ${elem.Year}`}</NavLink></div>
                    </div> :
                    <div key={type + i}><NavLink to = {`/${elem.imdbID}`} activeStyle = {{color:"red"}}>{`${elem.Title} ${elem.Year}`}</NavLink></div>
            })
        })
        return(
            <div>
                {result[TYPES[0]] > result[TYPES[1]] ? result[TYPES[0]].concat(result[TYPES[1]]) : result[TYPES[1]].concat(result[TYPES[0]])}
            </div>

        )
    }
}
export default GetFilmsInSearch;
