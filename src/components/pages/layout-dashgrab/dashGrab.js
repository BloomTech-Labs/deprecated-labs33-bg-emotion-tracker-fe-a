import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ClubDirectorNav, SuperAdminNav, YDPNav } from '../layout-navs';

const DashGrab = props => {
  // const role = props.loggedInUser.roles[0].role.name;
  const { roles } = useSelector(state => state.user);
  console.log("Dashgrab State:", roles);

  switch (roles) {
    case 'SUPERADMIN':
      return <SuperAdminNav role={roles}/>;
    case 'CLUBDIR':
      return <ClubDirectorNav role={roles}/>;
    case 'YDP':
      return <YDPNav role={roles}/>;
    default:
      return <Redirect to="landing" />;
  }
};

export default DashGrab;
