import {FC} from 'react';
import Navbar from "../../components/header/navbar/Navbar";
import ButtonUserContainer from "../../components/header/navbar/buttonUserContainer/ButtonUserContainer";

const Header: FC<{}> = ({}) => {
    return (
        <header>
            <Navbar/>
            <ButtonUserContainer/>
        </header>
    );
};

export default Header;
