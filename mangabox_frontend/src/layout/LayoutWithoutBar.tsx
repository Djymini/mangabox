import {FC} from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../pages/3_footer/Footer";

const LayoutWithoutBar: FC<{}> = ({}) => {
    return (
        <>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default LayoutWithoutBar;
