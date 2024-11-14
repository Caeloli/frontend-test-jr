import React, { ReactElement } from 'react'
import Card from './Card';
import { Post } from '../../models';

interface UserPostProps {
    posts: Post[]
}

const UserPost = ({ posts }: UserPostProps): ReactElement => {
    return <>
        <Card title='Post Information'>
            <div className='max-h-96 overflow-y-scroll shadow-inner'>
                {
                    posts.map((post) => (
                        <div key={post.id} className='flex flex-col gap-4 mb-4 last-of-type:mb-0'>
                            <div>
                                <h4 className='font-semibold'>
                                    {post.id} - <span className='capitalize'>{post.title}</span>
                                </h4>
                            </div>
                            <div>
                                <p className='text-justify'>
                                    {post.body}
                                </p>
                            </div>
                            <div className='px-10 border-gray-300 border-2 pb-3 border-t-0 border-l-0 border-r-0'>
                                <span className='font-semibold'>Comments:</span>
                                <div className='flex flex-col gap-5'>
                                    {post.comments?.map((comment) => (
                                        <div key={comment.id} className='px-5 border border-t-0 border-b-0 border-r-0 border-l-2 border-l-gray-400'>
                                            <span className='font-semibold'>{comment.name}:</span> <span className='italic'>{comment.body}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Card>
    </>
}

export default UserPost;