import Conversation from "./Conversation"
import { useGetConversations } from "../../context/ConversationsProvider"

const Conversations = () => {
  const [loading, conversations] = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />

    </div>
  )
}

export default Conversations

//Stater Code
// import Conversation from "./Conversation"

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />

//     </div>
//   )
// }

// export default Conversations