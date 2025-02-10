import React, {useReducer} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "./routers/Router";
import {HelmetProvider} from "react-helmet-async";
import {authReducer, initialAuthState} from "./reducer/LoginReducer";
import NoAuthRouter from "./routers/NoAuthRouter";
import {getToken} from "./utlis/storage";
import {AuthContext as Auth} from './contexts/AuthContext';
import ThemeConfig from "./theme/ThemeConfig";


function App() {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);

    const Routing = () => {
        console.log(getToken())
        return getToken() ? <Router/> : <NoAuthRouter/>;
    }

    return (
        <BrowserRouter>
            <ThemeConfig>
                <HelmetProvider>
                    <Auth.Provider value={{state, dispatch}}>
                        <Routing/>
                    </Auth.Provider>
                </HelmetProvider>
            </ThemeConfig>
        </BrowserRouter>
    )
}

export default App;
