import React, {useEffect, useState} from 'react';
import './App.css';
import NoAuthRouter from "./routers/NoAuthRouter";
import {BrowserRouter} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import {ThemeProvider} from "@mui/material";
import mangaboxMuiTheme from "./_themes/mangaboxMuiTheme";
import {CartContext} from "./context/CartContext";
import {MangaType} from "./MangaType";


function App() {
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
                    <CartContext.Provider value={{mangaContent, setMangaContent}}>
                        <Routing/>
                    </CartContext.Provider>
                </ThemeProvider>
            </HelmetProvider>
        </BrowserRouter>
    )
}

export default App;
