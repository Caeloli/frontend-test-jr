import React, { ReactElement } from 'react'
import { User } from '../../models';
import Card from './Card';

interface UserDetailsProps {
    user: User | null
}

const UserDetails = ({ user }: UserDetailsProps): ReactElement => {
    if (!user)
        return <></>
    return <Card title='User Selected Information'>
        <div className='flex flex-col gap-10'>
            <div className='grid grid-cols-3 justify-between gap-1'>
                <UserDetailsField tagName='ID' value={user.id} />
                <UserDetailsField tagName='Name' value={user.name} />
                <UserDetailsField tagName='Username' value={user.username} />
                <UserDetailsField tagName='Phone' value={user.phone} />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-between gap-1'>
                <UserDetailsField tagName='Company BS' value={user.company.bs} />
                <UserDetailsField tagName='Company BS' value={user.company.catchPhrase} />
                <UserDetailsField tagName='Company CatchPhrase' value={user.address.city} />
            </div>
            <div className='grid grid-cols-3 justify-between gap-1'>
                <UserDetailsField tagName='Address City' value={user.address.street} />
                <UserDetailsField tagName='Address Suite' value={user.address.suite} />
                <UserDetailsField tagName='Address Zipcode' value={user.address.zipcode} />
            </div>
            <div className='grid grid-cols-1 justify-between gap-1'>
                <UserDetailsField tagName='User Website' value={user.website} />
            </div>
        </div>
    </Card>
}

const UserDetailsField = ({ tagName, value }: { tagName: string, value: string | number }) => {
    return <div className='flex flex-col items-start'>
        <div className='font-light text-gray-600'>
            {tagName}
        </div>
        <div className='font-medium'>
            {value}
        </div>
    </div>
}

export default UserDetails;