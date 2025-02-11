import {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import LayoutWithoutBar from "../layout/LayoutWithoutBar";
import Home from "../pages/2_main/Home";
import Products from "../pages/2_main/Products";
import LayoutWithBar from "../layout/LayoutWithBar";

const NoAuthRouter: FC<{}> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<LayoutWithoutBar/>}>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
            </Route>
            <Route path="/" element={<LayoutWithBar/>}>
                <Route path="/Products" element={<Products/>}/>
            </Route>
        </Routes>
    );
};

export default NoAuthRouter;
