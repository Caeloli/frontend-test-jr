import React, { ReactElement } from 'react'
import UserDetails from '../views/UserDetails';
import {  useSelector } from 'react-redux';
import {  RootState } from '../../redux/store';

const UserDetailsContainer = (): ReactElement => {
    const selectedUser = useSelector((state: RootState) => state.users.selectedUser);
    return <UserDetails user={selectedUser} />;
}

export default UserDetailsContainer;