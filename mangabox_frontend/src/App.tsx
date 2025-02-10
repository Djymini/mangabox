import React from 'react';
import './App.css';
import NoAuthRouter from "./routers/NoAuthRouter";
import {BrowserRouter} from "react-router-dom";


function App() {
    const Routing = () => {
        return <NoAuthRouter/>;
    }

    return (
        <BrowserRouter>
            <Routing/>
        </BrowserRouter>
    )
}

export default App;
