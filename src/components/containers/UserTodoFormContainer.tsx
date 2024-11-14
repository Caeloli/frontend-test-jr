import React, { ReactElement, useState } from 'react'
import UserTodoForm from '../views/UserTodoForm'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { addTodo } from '../../redux/slices/todosSlice';
import { ToDos } from '../../models';

const UserTodoFormContainer = (): ReactElement => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.users.selectedUser);

    const [title, setTitle] = useState<string>('');
    const [completed, setCompleted] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ title?: string }>({});
    const [responseTask, setResponseTask] = useState<ToDos>();
    const validateForm = (): boolean => {
        const newErrors: { title?: string } = {};
        if (!title.trim()) {
            newErrors.title = 'Title is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm() && user) {
            await dispatch(
                addTodo({
                    userId: user.id,
                    title,
                    completed,
                })
            ).then((response) => {
                setResponseTask(response.payload as ToDos)
            });
            setTitle('');
            setCompleted(false);
        }
    };
    return <UserTodoForm title={title}
        completed={completed}
        errors={errors}
        onTitleChange={setTitle}
        onCompletedChange={setCompleted}
        onSubmit={handleSubmit} 
        postedTask={responseTask}
        />
}

export default UserTodoFormContainer;