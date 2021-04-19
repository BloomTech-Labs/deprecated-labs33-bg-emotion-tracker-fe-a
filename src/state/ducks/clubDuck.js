import axios from 'axios';

/******************************************************
 * CLUB ACTION TYPES
 ******************************************************/

const GET_CLUB_START = ' GET_PROGRAM_START';
const GET_CLUB_SUCCESS = ' GET_PROGRAM_SUCCESS';
const GET_CLUB_FAIL = ' GET_PROGRAM_FAIL';
const GET_CLUB_RESOLVE = ' GET_PROGRAM_RESOLVE';

const GET_ALL_CLUBS_START = 'GET_ALL_PROGRAMS_START';
const GET_ALL_CLUBS_SUCCESS = 'GET_ALL_PROGRAMS_SUCCESS';
const GET_ALL_CLUBS_FAIL = 'GET_ALL_PROGRAMS_FAIL';
const GET_ALL_CLUBS_RESOLVE = 'GET_ALL_PROGRAMS_RESOLVE';

/******************************************************
 * CLUB ACTIONS
 ******************************************************/

export const clubActions = {
  getAllClubsThunk: () => dispatch => {
    axios
      .get('')
      .then(res => {})
      .catch(err => {})
      .finally(() => {});
  },
};

/******************************************************
 * CLUB INITIALSTATE
 ******************************************************/

const clubsInitialState = {
  status: 'idle',
  err: '',
};

/******************************************************
 * CLUB REDUCER
 ******************************************************/

const clubsReducer = (state = clubsInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default clubsReducer;
