import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/usersSlice';
import postReducer from './slices/postsSlice';
import todoReducer from './slices/todosSlice'
export const store = configureStore({
    reducer: {
        users: userReducer,
        posts: postReducer,
        todos: todoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;