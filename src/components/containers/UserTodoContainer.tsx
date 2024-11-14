import React, { ReactElement, useEffect } from 'react'
import UserTodo from '../views/UserTodo';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchTodosByUser } from '../../redux/slices/todosSlice';

const UserTodoContainer = ():ReactElement => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.users.selectedUser);
    const todos = useSelector((state: RootState) => state.todos);

    useEffect(() => {
        if (user) {
            dispatch(fetchTodosByUser(user.id));
        }
    }, [dispatch, user])

    return <UserTodo todos={todos} />
}

export default UserTodoContainer;