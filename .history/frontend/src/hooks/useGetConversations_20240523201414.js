import { useState } from 'react';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  
}

export default useGetConversations