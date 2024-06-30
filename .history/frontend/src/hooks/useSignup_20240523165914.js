import toast from "react-hot-toast";
import { useState } from "react";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const signup = async (fullName, username, password, confirmPassword, gender) => {
        const success = handleInputErrors(fullName, username, password, confirmPassword, gender);
        if (!success) return;

        try{

        } catch {

        }
    }
};

export default useSignup

function handleInputErrors(fullName, username, password, confirmPassword, gender) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all the fields");
    return false;
  }

  if(password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if(password.length < 6) {
    toast.error("Password must be at least 6 characters ");
    return false;
  }

  return true;
}