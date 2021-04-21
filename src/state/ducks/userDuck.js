import axios from 'axios';

/******************************************************
 * USER ACTION TYPES
 ******************************************************/

export const GET_USER_START = 'LOGIN_START';
export const GET_USER_SUCCESS = 'LOGIN_SUCCESS';
export const GET_USER_FAIL = 'LOGIN_FAIL';
export const GET_USER_RESOLVE = 'LOGIN_RESOLVE';

/******************************************************
 * USER ACTIONS
 ******************************************************/

export const userActions = {
  //GET USER INFO
  getUserThunk: () => dispatch => {
    dispatch({ type: GET_USER_START });

    axios
      .get('/users/getuserinfo')
      .then(res => {
        dispatch({ type: GET_USER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_FAIL, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: GET_USER_RESOLVE });
      });
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
  switch (action.type) {
    case GET_USER_START:
      return { ...state, status: 'edit/pending' };
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
