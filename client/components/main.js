import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, NavLink, Link} from 'react-router-dom'
import {logout, postTrip} from '../store'
import history from '../history'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */

 export class Main extends Component {
  submitTrip = (event) =>{
    event.preventDefault()
    const userId = this.props.user.id
    this.props.createTrip(userId)
  }
render(){

  const {children, handleClick, isLoggedIn} = this.props

  return (
    <div>
        {
        isLoggedIn
        ?
        <div id="nav-bar">
        <Link to="/home">
          <div className="flex-display">
            <img src="/origami-bird-white.png" id="logo" />
            <h2 className="flock-blue" id="flock-name">flock</h2>
          </div>
        </Link>
        </div>
        :
        <div id="nav-bar-logged-out">
        <Link to="/">
        <div className="flex-display">
            <img src="/origami-bird-white.png" id="logo" />
            <h2 className="flock-blue" id="flock-name">flock</h2>
          </div>
        </Link>
        </div>
        }
        <nav className="vertical-align-center">
          {
            isLoggedIn
               ? <div>
                {/* The navbar will show these links after you log in */}
                <NavLink to="/home" className="nav-links">Dashboard</NavLink>
                <NavLink onClick={this.submitTrip} to="/createtrip" className="nav-links">Create Trip</NavLink>
                <a href="#" onClick={handleClick} className="nav-links">Logout</a>
              </div>
              : <div id="nav-bar-logged-out" />
          }
        </nav>
        {children}
      </div>
  )
}
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    },
    createTrip: (userId, trip) => {
      return dispatch(postTrip(userId, trip))
      .then(trip =>{
        let tripId = trip.trip.id
        history.push(`/trips/tripdetails/${tripId}`)
      })
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
