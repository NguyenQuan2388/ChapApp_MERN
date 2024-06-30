import useConversation from "../zustand/useConversation";
import { useState } from "react";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState();
  const {messages, setMessages, selectedConversation} = useConversation();

  const useSendMessage = async (message) => {
    setLoading(true);
    try {
        const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({message}),
        });
    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  };
}

export default useSendMessage