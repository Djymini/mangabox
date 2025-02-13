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


function App() {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    const [mangaContent, setMangaContent] = useState<MangaType[]>([])

    useEffect(() => {
        console.log(mangaContent);
    }, [mangaContent]);

    const Routing = () => {
        return <NoAuthRouter/>;
    }


    return (
        <BrowserRouter>
            <HelmetProvider>
                <ThemeProvider theme={mangaboxMuiTheme}>
                    <AuthContext.Provider value={{state, dispatch}}>
                        <CartContext.Provider value={{mangaContent, setMangaContent}}>
                            <Routing/>
                        </CartContext.Provider>
                    </AuthContext.Provider>
                </ThemeProvider>
            </HelmetProvider>
        </BrowserRouter>
    )
}

export default App;
