import {FC, useState} from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../pages/3_footer/Footer";
import Header from "../pages/1_header/Header";
import {SearchContext} from "../context/SearchContext";

const LayoutWithBar: FC<{}> = ({}) => {
    const [search, setSearch] = useState<string>("")
    return (
        <>
            <SearchContext.Provider value={{search, setSearch}}>
                <Header/>
                <Outlet/>
                <Footer/>
            </SearchContext.Provider>
        </>
    );
};

export default LayoutWithBar;
