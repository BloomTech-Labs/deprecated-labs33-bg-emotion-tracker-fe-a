import React from 'react';
import { useSelector } from 'react-redux';
import { ClubDirectorNav, SuperAdminNav, YDPNav } from '../layout-navs';

const DashGrab = ({ props }) => {
    const { role } = useSelector(state => state.user);
    return (
        <>
            { role === 'SUPERADMIN' ?  (
                <>
                    <SuperAdminNav/>
                </>
            ) : role === 'CLUBDIRECTOR' ? (
                <>
                    <ClubDirectorNav/>
                </>
            ) : role === 'YDP' ? (
                <>
                    <YDPNav/>
                </>
            ) : null }
        </>
    );
};

export default DashGrab;