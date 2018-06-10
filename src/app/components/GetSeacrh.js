import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {loadSearchFilms} from "../AC";

class GetSearch extends Component {
    static propTypes = {
        filmsArr:PropTypes.array,
        textSearch:PropTypes.string
    }
    render() {
        console.log(this.props,this.props)
        return (
            <div>
                <input onChange={this.getRequest}/>
            </div>
        );
    }
    getRequest = ev =>{
        const {value} = ev.target;
        this.props.loadSearchFilms(value)
    };
}
export default connect(({searchReducer}) =>({
    filmsArr:searchReducer.filmsArr,
    textSearch:searchReducer.textSearch
}),{loadSearchFilms})(GetSearch);
