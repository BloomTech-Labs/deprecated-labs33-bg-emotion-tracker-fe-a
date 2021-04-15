import React from 'react';
import { Button } from '../../common';
// import { Link } from 'react-router-dom';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
      {/* <p>
          <Link to="dashboard-wrapper">dashboardWrapper</Link>
        </p>
        <p>
          <Link to="clubdash-wrapper">clubDashWrapper</Link>
        </p> */}
     
      <div>
        <p>
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
