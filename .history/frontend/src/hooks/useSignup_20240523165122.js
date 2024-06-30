const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const signup = async (inputs) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/auth/signup", inputs);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
}

export default useSignup