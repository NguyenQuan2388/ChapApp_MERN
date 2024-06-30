import useConversation from "../zustand/useConversation";
import { useState } from "react";

const useSendMessage = () => {
  const [loading, setloading] = useState();
  const {messages, setMessages, selectedConversation} = useConversation();

  const useSendMessage = async (message) => {};
}

export default useSendMessage