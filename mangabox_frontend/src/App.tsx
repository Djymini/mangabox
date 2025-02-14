import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import NoAuthRouter from "./routers/NoAuthRouter";
import {BrowserRouter} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import {ThemeProvider} from "@mui/material";
import mangaboxMuiTheme from "./_themes/mangaboxMuiTheme";
import {CartContext} from "./context/CartContext";
import {MangaType} from "./MangaType";
import {AuthContext} from "./context/AuthContext";
import {authReducer, initialAuthState} from "./reducer/LoginReducer";
import {getToken} from "./utilis/storage";
import AuthRouter from "./routers/AuthRouter";


function App() {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    const [mangaContent, setMangaContent] = useState<MangaType[]>([])
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log(mangaContent);
    }, [mangaContent]);

    const Routing = () => {
        console.log(state);
        console.log(dispatch)
        return getToken() ? <AuthRouter/> : <NoAuthRouter/>;
    };


    return (
        <BrowserRouter>
            <HelmetProvider>
                <ThemeProvider theme={mangaboxMuiTheme}>
                    <AuthContext.Provider value={{state, dispatch}}>
                        <CartContext.Provider value={{mangaContent, setMangaContent, isVisible, setIsVisible}}>
                            <Routing/>
                        </CartContext.Provider>
                    </AuthContext.Provider>
                </ThemeProvider>
            </HelmetProvider>
        </BrowserRouter>
    )
}

export default App;
