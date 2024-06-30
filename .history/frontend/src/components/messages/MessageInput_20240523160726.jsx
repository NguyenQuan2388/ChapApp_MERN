import React from 'react'

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full'>
        <input type='text' placeholder='Type a message' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white' />
        
        </div>
    </form>
  )
}

export default MessageInput