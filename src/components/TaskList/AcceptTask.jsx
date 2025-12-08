import React from 'react'

const AcceptTask = ({data}) => {
   
  return (
          <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-2'>{data.taskDescription}</p>
    <div className='flex justify-between mt-4'>
        <button className='w-[50%]   bg-green-500 m-5 mt-3 text-sm'>mark as Completed</button>
        <button className='w-[40%]  bg-red-500 m-5 mt-3 text-sm'>Mark as failed</button>
    </div>
      </div>
  )
}

export default AcceptTask
