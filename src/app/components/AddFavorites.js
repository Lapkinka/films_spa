import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"

class AddFavorites extends Component {
  static propTypes ={

  }
  state = {
    add:false
  }
  render() {
    return <div><div className = "text_in_favor">add/remove favorites:</div><div className = {`favorite ${this.state.add ? "action" : ""}`} onClick={this.toggle}> </div></div>
  }
  toggle = (ev) =>{
    const {target} = ev,{add} = this.state
    if(add){
      this.state.add = !this.state.add
      target.classList.remove("action")
    }
    else{
      this.state.add = !this.state.add
      target.classList.add("action")
    }
  }
}

export default AddFavorites


