import React, { ReactElement } from 'react'
import { ToDos } from '../../models';

interface UserTodoFormProps {
    postedTask?: ToDos;
    title: string;
    completed: boolean;
    errors: { title?: string };
    onTitleChange: (value: string) => void;
    onCompletedChange: (value: boolean) => void;
    onSubmit: (e: React.FormEvent) => void;
}

const UserTodoForm = ({
    postedTask,
    title,
    completed,
    errors,
    onTitleChange,
    onCompletedChange,
    onSubmit,
}: UserTodoFormProps): ReactElement => {
    return <><form onSubmit={onSubmit} className="max-w-md bg-white px-6 pb-5 rounded-lg shadow-sm">
        <div className="">
            {/* Title Input Group */}
            <div className="">
                <label
                    htmlFor="title"
                    className="block font-light text-gray-700"
                >
                    Title
                </label>
                <div className="py-3">
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => onTitleChange(e.target.value)}
                        className="
              w-full
              px-4 
              py-2 
              bg-gray-50
              border
              border-gray-200
              rounded-md
              shadow-sm
              focus:ring-2
              focus:ring-indigo-500
              focus:border-transparent
              outline-none
              transition-all
              duration-200
            "
                        placeholder="Enter ToDo title..."
                    />
                    {errors?.title && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.title}
                        </p>
                    )}
                </div>
            </div>

            {/* Completed Checkbox Group */}
            <div className="flex items-center gap-3 justify-left">
                <input
                    type="checkbox"
                    id="completed"
                    checked={completed}
                    onChange={(e) => onCompletedChange(e.target.checked)}
                    className="
            w-4 
            h-4 
            rounded
            border-gray-300
            text-indigo-600
            focus:accent-indigo-500
            cursor-pointer
          "
                />
                <label
                    htmlFor="completed"
                    className="text-sm font-medium text-gray-700 cursor-pointer select-none"
                >
                    Mark as completed
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="
          w-full
          mt-3
          px-4
          py-2
          bg-indigo-600
          text-white
          font-medium
          rounded-md
          hover:bg-indigo-500
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          focus:ring-offset-2
          transform
          transition-all
          duration-200
          hover:translate-y-[-1px]
          active:translate-y-[1px]
        "
            >
                Add Todo
            </button>
        </div>
    </form>
        {postedTask && <div className=''>
            <h4 className='font-bold'>POSTED TASK</h4>
            <p>{'{'}</p>
            <p><span className='font-semibold'>userId</span>: {postedTask.userId}</p>
            <p><span className='font-semibold'>id</span>: {postedTask.id} </p>
            <p><span className='font-semibold'>title</span>: {postedTask.title} </p>
            <p><span className='font-semibold'>completed</span>: {postedTask.completed ? <span className='text-green-800'>true</span> :<span className='text-red-800'>false</span>}</p>
            <p>{'}'}</p>
        </div>}

    </>
}

export default UserTodoForm;