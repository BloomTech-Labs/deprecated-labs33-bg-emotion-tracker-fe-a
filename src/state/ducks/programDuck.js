import axios from 'axios';
/******************************************************
 * PROGRAM ACTION TYPES
 ******************************************************/

const GET_PROGRAM_START = ' GET_PROGRAM_START';
const GET_PROGRAM_SUCCESS = ' GET_PROGRAM_SUCCESS';
const GET_PROGRAM_FAIL = ' GET_PROGRAM_FAIL';
const GET_PROGRAM_RESOLVE = ' GET_PROGRAM_RESOLVE';

const GET_ALL_PROGRAMS_START = 'GET_ALL_PROGRAMS_START';
const GET_ALL_PROGRAMS_SUCCESS = 'GET_ALL_PROGRAMS_SUCCESS';
const GET_ALL_PROGRAMS_FAIL = 'GET_ALL_PROGRAMS_FAIL';
const GET_ALL_PROGRAMS_RESOLVE = 'GET_ALL_PROGRAMS_RESOLVE';

/******************************************************
 * PROGRAM ACTIONS
 ******************************************************/

export const programActions = {
  getAllProgramsThunk: () => dispatch => {
    axios
      .get('')
      .then(res => {})
      .catch(err => {})
      .finally(() => {});
  },
};

/******************************************************
 * PROGRAMS INITIAL STATE
 ******************************************************/

const programsInitialState = {
  status: 'idle',
  err: '',
};

/******************************************************
 * PROGRAMS REDUCERS
 ******************************************************/

const programsReducer = (state = programsInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default programsReducer;
