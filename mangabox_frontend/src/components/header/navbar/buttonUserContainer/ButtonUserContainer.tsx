import {FC, useContext} from 'react';
import {IconButton} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import styles from "../navbar.module.css"
import {navbarButtonStyle, navbarIconStyle} from "../navbarStyles";
import {getToken} from "../../../../utilis/storage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import {CartContext} from "../../../../context/CartContext";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../../context/AuthContext";
import BadgeCart, {CartBadge} from "../../../main/asideCart/badgeCart/BadgeCart";

const ButtonUserContainer: FC<{}> = ({}) => {
    const cartContext = useContext(CartContext)
    const navigate = useNavigate();
    const {dispatch} = useAuth();

    const handleLogout = async () => {
        dispatch({type: 'LOGOUT'});
        navigate("/")
    }

    const handleCart = () => {
        cartContext?.setIsVisible(!cartContext?.isVisible)
        navigate("/Products")
    }

    const handleUser = () => {
        navigate("/ListOrder")
    }

    return (
        getToken() ? (
            <div className={styles.buttonUserContainer}>
                <IconButton sx={navbarButtonStyle} onClick={handleCart}>
                    <ShoppingCartIcon sx={navbarIconStyle}/>
                    <CartBadge badgeContent={cartContext?.mangaContent !== undefined ? cartContext.mangaContent.length : 0} overlap="circular"/>
                </IconButton>
                <IconButton sx={navbarButtonStyle} onClick={handleUser}>
                    <PersonIcon sx={navbarIconStyle}/>
                </IconButton>
                <IconButton sx={navbarButtonStyle} onClick={handleLogout}>
                    <LogoutIcon sx={navbarIconStyle}/>
                </IconButton>
            </div>
        ) : (
            <div className={styles.buttonUserContainer}>
                <IconButton sx={navbarButtonStyle}>
                    <ShoppingCartIcon sx={navbarIconStyle}/>
                </IconButton>
                <IconButton sx={navbarButtonStyle}>
                    <LoginIcon sx={navbarIconStyle}/>
                </IconButton>
            </div>
        )
    );
};

export default ButtonUserContainer;
