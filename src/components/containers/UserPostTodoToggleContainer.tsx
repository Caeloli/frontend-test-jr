import React, { ReactElement, useState } from 'react'
import UserPostTodoToggleButton from '../views/UserPostTodoToggleButton'
import UserPostContainer from './UserPostContainer';
import UserTodoContainer from './UserTodoContainer';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const UserPostTodoToggleContainer = (): ReactElement => {
    const [selectedTab, setSelectedTab] = useState<'post' | 'todo'>('post');
    const selectedUser = useSelector((state: RootState) => state.users.selectedUser);
    const onTabChange = (value: 'post' | 'todo'): void => {
        setSelectedTab(value);
    }

    if (!selectedUser)
        return <></>
    return (
        <>
            <UserPostTodoToggleButton onTabClick={onTabChange} selectedTab={selectedTab} />
            {selectedTab === 'post' && (
                <UserPostContainer />
            )}
            {selectedTab === 'todo' && (
                <UserTodoContainer />
            )}
        </>
    );
}

export default UserPostTodoToggleContainer;