import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';
import {svgSource} from '../helpers/helpers'

class ForTest extends Component {
  static propTypes ={
    text:PropTypes.string.isRequired
  }
  render() {
    const {text} = this.props
    return <div>{!text.length ? <InlineSVG src={svgSource} /> : <p>For_Test_text{text}</p>}</div>
  }
}

export default ForTest;
