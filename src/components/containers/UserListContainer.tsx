import React, { ReactElement, useEffect } from 'react'
import UserList from '../views/UserList'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { getUsers, setSelectedUser } from '../../redux/slices/usersSlice'
import { User } from '../../models'

const UserListContainer = (): ReactElement => {

    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.users.users);

    useEffect(() => {
        dispatch(getUsers());
      }, [dispatch]);

      const handleSelectUser = (user: User) => {
        dispatch(setSelectedUser(user));
      };

    return (
        <UserList users={users} onUserSelect={handleSelectUser} />
    );
}

export default UserListContainer;