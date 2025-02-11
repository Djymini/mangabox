import React, {useState} from 'react';
import './App.css';
import NoAuthRouter from "./routers/NoAuthRouter";
import {BrowserRouter} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import {ThemeProvider} from "@mui/material";
import mangaboxMuiTheme from "./_themes/mangaboxMuiTheme";
import {SearchContext} from "./context/SearchContext";


function App() {

    const Routing = () => {
        return <NoAuthRouter/>;
    }


    return (
        <BrowserRouter>
            <HelmetProvider>
                <ThemeProvider theme={mangaboxMuiTheme}>
                    <Routing/>
                </ThemeProvider>
            </HelmetProvider>
        </BrowserRouter>
    )
}

export default App;
