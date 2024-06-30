import { BsSend } from 'react-icons/bs'
import { useState } from 'react'

const MessageInput = () => {

  const [message, setMessage] = useState('');
  const {loading, useSendMessage} = useSendMessage();
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
        <input type='text' placeholder='Type a message' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white' 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
        
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
          <BsSend />  
        </button>
        </div>
    </form>
  )
}

export default MessageInput