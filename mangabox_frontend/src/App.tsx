import React from 'react';
import './App.css';
import NoAuthRouter from "./routers/NoAuthRouter";
import {BrowserRouter} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";


function App() {
    const Routing = () => {
        return <NoAuthRouter/>;
    }

    return (
        <BrowserRouter>
            <HelmetProvider>
                <Routing/>
            </HelmetProvider>
        </BrowserRouter>
    )
}

export default App;
