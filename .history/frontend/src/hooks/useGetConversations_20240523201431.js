import { useEffect, useState } from 'react';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch('/api/conversations')
      .then((res) => res.json())
      .then((data) => {
        setConversation(data);
        setLoading(false);
      });
  }, []);

}

export default useGetConversations