import React from 'react'
import toast from 'react-hot-toast';

const useLogin = () => {
  const [loading, setLoading] = React.useState(false);
  const {setAuthUser} = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();

        if(data.error){
            throw new Error(data.message);
        }

        localStorage.setItem("chat-use", JSON.stringify(data));
        setAuthUser(data);
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  };

  return {login, loading};
}

export default useLogin