import React from 'react'

const useLogout = () => {
  const [loading, setLoading] = React.useState(false);

  const logout = async () => {
    try {
      setLoading(true);
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.removeItem("chat-user");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
}

export default useLogout