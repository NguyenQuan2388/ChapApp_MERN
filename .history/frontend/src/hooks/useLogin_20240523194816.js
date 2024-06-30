import React from 'react'
import toast from 'react-hot-toast';

const useLogin = () => {
  const [loading, setLoading] = React.useState(false);

  const login = async (username, password) => {
    setLoading(true);
    try {
        const res = await fetch("/api/auth/login", {
            
        });
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  };
}

export default useLogin