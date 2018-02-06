import axios from 'axios'

//FLIGHT ACTION TYPES
const GET_ACTIVE_USER_FLIGHTS = 'GET_ACTIVE_USER_FLIGHTS'

/**
 * ACTION CREATORS
 */

 const getActiveUserFlights = flights => ({type: GET_ACTIVE_USER_FLIGHTS, flights})

 /**
 * THUNK CREATORS
 */

 export const fetchActiveUserFlights = (tripId, userId) => dispatch => {
   console.log('fetch active user flights route hit!')
  axios.get('/api/flights/activeusercities', {
    params: {
      tripId: tripId,
      userId: userId
    }
  })
  .then(results => {
    console.log('fetchActiveUserFlights: ', results.data)
    dispatch(getActiveUserFlights(results.data))
  })
 }

/**
 * REDUCER
 */

export default function (activeUserCities = [], action) {
  switch (action.type) {
    case GET_ACTIVE_USER_FLIGHTS:
      return action.flights
    default:
      return activeUserCities
  }
}
