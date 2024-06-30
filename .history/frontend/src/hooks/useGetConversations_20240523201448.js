import { useEffect, useState } from 'react';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/conversations');
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

}

export default useGetConversations