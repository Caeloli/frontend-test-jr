import React, { ReactElement } from 'react'

interface UserPostTodoToggleButtonProps {
    onTabClick: (value: 'post' | 'todo') => void,
    selectedTab: string
}

const UserPostTodoToggleButton = ({ onTabClick, selectedTab }: UserPostTodoToggleButtonProps): ReactElement => {
    return <>
        {/* Post/ToDo Content */}
        <div className='my-6'>
            <div className='container mx-auto'>
                <div className='flex rounded bg-gray-200 w-fit'>
                    <div onClick={() => onTabClick('post')} 
                    className={`pointer-events-auto cursor-pointer my-1 ml-0.5 px-3 py-1 rounded ${selectedTab === 'post' ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'text-gray-500'}   transition-all duration-300`}>Posts</div>
                    <div onClick={() => onTabClick('todo')} 
                    className=
                    {`pointer-events-auto cursor-pointer my-1 mr-0.5 px-3 py-1 rounded ${selectedTab === 'todo' ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'text-gray-500'} transition-all duration-300`}>Todo</div>
                </div>
            </div>
        </div>
    </>
}

export default UserPostTodoToggleButton