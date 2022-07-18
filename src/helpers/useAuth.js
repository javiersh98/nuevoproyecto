import { useContext } from "react";
import AuthContext from "./../helpers/authProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;