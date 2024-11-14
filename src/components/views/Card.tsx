import React, { ReactElement } from 'react'

const Card = ({ title, children }: { title: string, children: string | ReactElement | ReactElement[] }): ReactElement => {
    return <div className='w-full my-6 animate-fade-up'>
        <div className='container bg-white shadow-md mx-auto rounded-lg px-4 py-4 text-black'>
            <div className='text-xl font-medium py-3 border-b-gray-300 border border-t-0 border-l-0 border-r-0'>
                <h2>{title}</h2>
            </div>
            <div className='py-2'>
                {children}
            </div>
        </div>
    </div>
}

export default Card;