import axios from 'axios';

/******************************************************
 * USER ACTION TYPES
 ******************************************************/

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';
export const GET_USER_RESOLVE = 'GET_USER_RESOLVE';

/******************************************************
 * USER ACTIONS
 ******************************************************/

export const userActions = {
  //GET USER INFO
  getUserThunk: (dispatch, headers) => {
    dispatch({ type: GET_USER_START });

    axios
      .get('https://bg-emotion-tracker-be-a.herokuapp.com/users/getuserinfo', headers)
      .then(res => {
        dispatch({ type: GET_USER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_FAIL, payload: err.message });
      });
      // .finally(() => {
      //   dispatch({ type: GET_USER_RESOLVE });
      // });
  },
};

/******************************************************
 * USER INITIAL STATE
 ******************************************************/

export const userInitialState = {
  userid: null,
  username: null,
  useremails: null,
  roles: null,
  status: 'idle',
  error: '',
};

/******************************************************
 * USER REDUCER
 ******************************************************/

const userReducer = (state = userInitialState, action) => {
  console.log("Reducer hit:", action);
  switch (action.type) {
    case GET_USER_START:
      return { status: 'edit/pending' };
    case GET_USER_SUCCESS:
      return {
        ...state,
        userid: action.payload.userid,
        username: action.payload.username,
        useremails: action.payload.useremails,
        roles: action.payload.roles[0].role.name,
        status: 'edit/success',
      };
    case GET_USER_FAIL:
      return { ...state, status: 'edit/error' };
    case GET_USER_RESOLVE:
      return { ...state, status: 'idle' };
    default:
      return state;
  }
};

export default userReducer;
