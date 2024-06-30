import React from 'react'

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full'>
        <input type='text' placeholder='Type a message' className='w-full bg-slate-500 text-white px-4 py-2 rounded-lg' />
        </div>
    </form>
  )
}

export default MessageInput