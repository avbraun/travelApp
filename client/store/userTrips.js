import axios from 'axios'

const GET_USER_TRIPS = 'GET_USER_TRIPS'
const DELETE_MEMBERSHIP = 'DELETE_MEMBERSHIP'

const getUserTrips = userAndTrips => ({type: GET_USER_TRIPS, userAndTrips})
const remove = userAndTrips => ({type: DELETE_MEMBERSHIP, userAndTrips})

export const fetchUserTrips = userId =>
  dispatch =>
    axios.get(`/api/trips/user/${userId}`)
      .then(res =>
        dispatch(getUserTrips(res.data)))
      .catch(err => console.error(err))

  export const deleteMembership = (ids) => (dispatch) => {
  dispatch(remove(ids));
  axios.delete(`/api/memberships/${ids.tripId}/user/${ids.userId}`)
     .catch(err => console.error(err));
 };

export default function (state = [], action) {
  let deleteState = state.slice()
  switch (action.type) {
    case GET_USER_TRIPS:
      return action.userAndTrips
    case DELETE_MEMBERSHIP:
      return deleteState.filter(userAndTrips =>
          userAndTrips.tripId !== action.userAndTrips.tripId
      )
    default:
      return state
  }
}
