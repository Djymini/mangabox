import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import LayoutWithoutBar from "../layout/LayoutWithoutBar";
import Home from "../pages/2_main/Home";
import LayoutWithBar from "../layout/LayoutWithBar";
import Products from "../pages/2_main/Products";

const AuthRouter: FC<{}> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<LayoutWithBar/>}>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/" element={<Products/>}/>
            </Route>
        </Routes>
    );
};

export default AuthRouter;