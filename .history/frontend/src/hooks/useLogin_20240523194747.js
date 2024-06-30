import React from 'react'
import toast from 'react-hot-toast';

const useLogin = () => {
  const [loading, setLoading] = React.useState(false);

  const login = async (username, password) => {
    try {
        
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  };
}

export default useLogin