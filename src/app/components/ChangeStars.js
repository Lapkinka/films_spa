import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {changeStarsAction} from "../AC"

class ChangeStars extends Component {
  static propTypes = {
    id:PropTypes.string,
    rating:PropTypes.string
  }
  render() {
    const{rating} = this.props
    return(
      <div>
        <div className = "starsRating">
          {Array.from({length:10},(undef,i) => <div key={i+1} datatype={i+1}
                                                    className = {rating !== undefined
                                                    && Number(rating) >= i+1 ? "star selected" : "star"}
                                                    onMouseEnter={this.enter}
                                                    onMouseLeave={this.leave}
                                                    onClick={this.setRating.bind(this)}/>)}
        </div>
        {rating !== undefined ?
          <div className = "deleteRating" datatype = "delete" onClick={this.setRating.bind(this)}>
            delete rating
          </div>
          : null}
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
      {changeStarsAction,id} = this.props,
      stars = target.parentElement.querySelectorAll("div > .star"),
      rating = target.getAttribute("datatype")
      if(rating === "delete") changeStarsAction(undefined,id)
      else{
      stars.forEach(elem => elem.classList.remove("selected"))
        stars.forEach(elem => Number(elem.getAttribute("datatype")) <= Number(rating) ? elem.classList.add("selected") : null)
        changeStarsAction(rating,id)
      }
  }
}

// export default ChangeStars;
export default connect(({searchReducer},ownProps) => ({rating:searchReducer.ids.get(ownProps.id).rating}),{changeStarsAction})(ChangeStars);
