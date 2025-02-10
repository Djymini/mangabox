import {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import LayoutWithoutBar from "../layout/LayoutWithoutBar";
import Home from "../pages/2_main/Home";

const NoAuthRouter: FC<{}> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<LayoutWithoutBar/>}>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    );
};

export default NoAuthRouter;
