import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message"

const Messages = () => {
  const{messages, loading} = useGetMessages();
  console.log(messages)
  return (
    <div className="px-4 flex-1 overflow-auto">
        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
    </div>   
  )
}

export default Messages