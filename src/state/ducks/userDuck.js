import axios from 'axios';

/******************************************************
 * USER ACTION TYPES
 ******************************************************/

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_RESOLVE = 'LOGIN_RESOLVE';

/******************************************************
 * USER ACTIONS
 ******************************************************/

export const userActions = {
  //GET USER INFO
  loginThunk: () => dispatch => {
    dispatch({ type: LOGIN_START });

    axios
      .get('/users/getuserinfo')
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAIL, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: LOGIN_RESOLVE });
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
    case LOGIN_START:
      return { ...state, status: 'edit/pending' };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userid: action.payload.userid,
        username: action.payload.username,
        useremails: action.payload.useremails,
        roles: action.payload.roles[0].role.name,
        status: 'edit/success',
      };
    case LOGIN_FAIL:
      return { ...state, status: 'edit/error' };
    case LOGIN_RESOLVE:
      return { ...state, status: 'idle' };
    default:
      return state;
  }
};

export default userReducer;
