import React, { ReactElement } from 'react'
import { User } from '../../models'
import Card from './Card';

interface UserListProps {
    users: User[],
    onUserSelect: (user: User) => void;

}

const UserList = ({ users, onUserSelect }: UserListProps): ReactElement => {
    return (
        <Card title='Users'>
            <div className='h-72 overflow-scroll w-full flex'>
                <div className=' w-full  rounded-xl relative'>
                    <div className='grid grid-cols-3 py-2 border border-t-0 border-r-0 border-l-0 font-bold sticky top-0 bg-white '>
                        <div className='px-2'>
                            ID
                        </div>
                        <div className='px-2'>
                            Name
                        </div>
                        <div className='px-2 text-center'>
                            MoreDetails
                        </div>
                    </div>
                    {
                        users.map((user) => (
                            <div key={user.id} className='grid grid-cols-3 items-center py-2 border border-b-gray-200 border-t-0 border-l-0 border-r-0 last-of-type:border-b-0'>
                                <div className='px-2'>
                                    {user.id}
                                </div>
                                <div className='px-2'>
                                    {user.name}
                                </div>
                                <div className='px-2 text-center'>
                                    <button className='pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem]/5 font-semibold text-white hover:bg-indigo-500 transition-all duration-300'
                                        onClick={() =>
                                            onUserSelect(user)

                                        }>Select</button>
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </Card>
    )
}

export default UserList;