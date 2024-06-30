import { createContext } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
const [authUser, setAuthUser] = useState(JSON.parse(localStorage) || null);

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
};