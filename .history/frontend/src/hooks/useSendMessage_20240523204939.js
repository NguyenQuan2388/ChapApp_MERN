import useConversation from "../zustand/useConversation";
import { useState } from "react";
import {toast} from "react-toastify";

const useSendMessage = () => {
  const [loading, setloading] = useState();
  const {messages, setMessages, selectedConversation} = useConversation();

  const useSendMessage = async (message) => {
    try {
        
    } catch (error) {
        toast.error(error.message);
    }finally{
        
    };
  };
}

export default useSendMessage