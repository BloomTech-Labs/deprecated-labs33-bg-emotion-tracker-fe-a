import axios from 'axios';

/******************************************************
 * MEMBER ACTION TYPES
 ******************************************************/

// const GET_MEMBER_START = ' GET_PROGRAM_START';
// const GET_MEMBER_SUCCESS = ' GET_PROGRAM_SUCCESS';
// const GET_MEMBER_FAIL = ' GET_PROGRAM_FAIL';
// const GET_MEMBER_RESOLVE = ' GET_PROGRAM_RESOLVE';

// const GET_ALL_MEMBERS_START = 'GET_ALL_PROGRAMS_START';
// const GET_ALL_MEMBERS_SUCCESS = 'GET_ALL_PROGRAMS_SUCCESS';
// const GET_ALL_MEMBERS_FAIL = 'GET_ALL_PROGRAMS_FAIL';
// const GET_ALL_MEMBERS_RESOLVE = 'GET_ALL_PROGRAMS_RESOLVE';

/******************************************************
 * MEMBER ACTIONS
 ******************************************************/

export const memberActions = {
  getAllMembersThunk: (dispatch) => {
    axios
      .get('')
      .then(res => {})
      .catch(err => {})
      .finally(() => {});
  },
};

/******************************************************
 * MEMBER INITIAL STATE
 ******************************************************/

const memberInitialState = {
  status: 'idle',
  err: '',
};

/******************************************************
 * MEMBER REDUCERS
 ******************************************************/

const membersReducer = (state = memberInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default membersReducer;
