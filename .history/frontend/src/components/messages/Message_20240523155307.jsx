
const Message = () => {
  return (
    <div className="chat chat-end ">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://randomuser.me/api/portraits" alt="user chat buble"/>
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">Hi? What is up?</div>
    </div>
  )
}

export default Message