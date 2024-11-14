
import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchPostsByUser } from '../../redux/slices/postsSlice';
import UserPost from '../views/UserPost';

const UserPostContainer = (): ReactElement => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.users.selectedUser);
    const posts = useSelector((state: RootState) => state.posts)

    useEffect(() => {
        if (user) {
            dispatch(fetchPostsByUser(user.id));
        }
    }, [dispatch, user])

    return <UserPost posts={posts} />
}


export default UserPostContainer;