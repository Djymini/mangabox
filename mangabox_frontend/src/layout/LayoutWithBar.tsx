import {FC} from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../pages/3_footer/Footer";
import Header from "../pages/1_header/Header";

const LayoutWithBar: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default LayoutWithBar;
