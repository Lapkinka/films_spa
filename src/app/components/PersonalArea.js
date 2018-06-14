import React, {Component} from 'react';
import {NavLink,Route} from "react-router-dom"
import PropTypes from 'prop-types';

class PersonalArea extends Component {
  static propTypes = {
  }
  render() {
    return(
      <div className = "PersonalArea">
        <div className = "want_see" >Want see</div>
        <div className = "looked" >Looked</div>
      </div>
    )
  }
}
export default PersonalArea;
