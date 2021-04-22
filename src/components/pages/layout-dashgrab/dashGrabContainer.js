import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { DashGrab } from '../layout-dashgrab/index';
import { getAuthHeader } from '../../../api';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../state/ducks/index';

const DashGrabContainer = ({ LoadingComponent }) => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);
  
  const authedHeaders = getAuthHeader(authState);
  const auth = getAuthHeader(authState);

  useEffect(() => {
    let isSubscribed = true;
    // userActions.getUserThunk(dispatch, { headers : authedHeaders });
    userActions.getUserThunk(dispatch, { headers: auth});
    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          
          setUserInfo(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && !authedHeaders && (
        <LoadingComponent message="Fetching user profile..." />
      )}
      {authState.isAuthenticated && userInfo && authedHeaders && (
        <DashGrab
          userInfo={userInfo}
          authService={authService}
        />
      )}
    </>
  );
};

export default DashGrabContainer;
