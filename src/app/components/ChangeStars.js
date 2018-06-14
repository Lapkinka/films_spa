import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChangeStars extends Component {
  static propTypes = {
  }
  render() {

    return(
      <div className = "starsRating">
        {Array.from({length:10},(undef,i) => <div key={i+1} datatype={i+1} className = "star"
                                                 onMouseEnter={this.enter}
                                                 onMouseLeave={this.leave}
                                                 onClick={this.setRating}/>)}
      </div>
    )
  }
  enter = (ev) =>{
    const {target} = ev,
      stars = target.parentElement.querySelectorAll("div > .star"),
      rating = target.getAttribute("datatype")

    stars.forEach(elem => Number(elem.getAttribute("datatype")) <= Number(rating)  ? elem.classList.add("hover") : null)
  }
  leave = (ev) =>{
    const {target} = ev,
      stars = target.parentElement.querySelectorAll("div > .star")

    stars.forEach(elem => elem.classList.remove("hover"))
  }
  setRating = function (ev) {
    const {target} = ev,
      stars = target.parentElement.querySelectorAll("div > .star"),
      rating = target.getAttribute("datatype")

    stars.forEach(elem => elem.classList.remove("selected"))
    stars.forEach(elem => Number(elem.getAttribute("datatype")) <= Number(rating) ? elem.classList.add("selected") : null)
  }
}
export default ChangeStars;
