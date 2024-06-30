import useConversation from "../../zustand/useConversation";

const Message = (message) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  return (
    <div className="chat chat-end ">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://randomuser.me/api/portraits" alt="user chat buble"/>
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">Hi? What is up?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
}

export default Message