import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {changeFavorites} from "../AC"

class AddFavorites extends Component {
  static propTypes ={
    addFilm:PropTypes.bool,
    id:PropTypes.string,
    changeFavorites:PropTypes.func
  }
  render() {
    const {addFilm} = this.props
    return <div><div className = "text_in_favor">add/remove favorites:</div><div className = {`favorite ${addFilm ? "action" : ""}`} onClick={this.toggle}> </div></div>
  }
  toggle = (ev) =>{
    const {target} = ev,{addFilm,changeFavorites,id} = this.props
    if(addFilm){
      target.classList.remove("action")
      changeFavorites(!addFilm,id)
    }
    else{
      target.classList.add("action")
      changeFavorites(!addFilm,id)
    }
  }
}

// export default AddFavorites
export default connect(({searchReducer},ownProps) => ({addFilm:searchReducer.ids.get(ownProps.id).addFilm}),{changeFavorites})(AddFavorites)


