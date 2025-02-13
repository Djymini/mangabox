import {AuthAction, AuthState} from "../reducer/LoginReducer";
import {createContext, Dispatch, useContext} from "react";

interface AuthentificationContext {
    state: AuthState;
    dispatch: Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthentificationContext | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};