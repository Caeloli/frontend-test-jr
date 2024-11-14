import React, { ReactElement } from 'react'
import Card from './Card';
import { ToDos } from '../../models';
import UserTodoFormContainer from '../containers/UserTodoFormContainer';

interface UserTodoProps {
    todos: ToDos[]
}

const UserTodo = ({ todos }: UserTodoProps): ReactElement => {
    return <>
        <Card title='Todo Information'>
            <div className='lg:max-h-96 flex flex-col lg:flex-row lg:gap-10 gap-4'>
                <div className=' w-full lg:w-1/2'>
                    <h4 className='font-bold text-lg pb-2'>ToDo List</h4>
                    <div className='max-h-80 shadow-inner rounded overflow-y-scroll'>
                        {todos.slice().sort((a, b) => a.id - b.id).map(todo => (
                            <div key={todo.id} className='flex flex-col'>
                                <div className='flex gap-1'>
                                    <span className='font-semibold'>
                                        {todo.id}
                                    </span>
                                    -
                                    <span className='font-semibold capitalize'>
                                        {todo.title}
                                    </span>
                                </div>
                                <div>
                                    <span className={`font-medium italic ${todo.completed ? 'text-green-900' : 'text-red-800'}`}>
                                        {todo.completed ? 'Completed' : 'No Completed'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <h4 className='font-bold text-lg pb-2'>ToDo Add</h4>
                    <div>
                        <UserTodoFormContainer />
                    </div>
                </div>
            </div>
        </Card>
    </>
}

export default UserTodo;