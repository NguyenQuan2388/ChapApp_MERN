import React from 'react'

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full'>
        <input type='text' placeholder='Type a message' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white' />
        
        <button type='submit' className='bg-sky-500 text-white rounded-lg px-4 py-2 mt-2'>Send</button>
        </div>
    </form>
  )
}

export default MessageInput