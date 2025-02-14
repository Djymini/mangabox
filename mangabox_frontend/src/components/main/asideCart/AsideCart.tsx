import {FC, useContext} from 'react';
import styles from "./asideCart.module.css"
import HeaderAsideCart from "./headerAsideCart/HeaderAsideCart";
import {CartContext} from "../../../context/CartContext";
import BodyAsideCart from "./bodyAsideCart/BodyAsideCart";
import CloseIcon from "@mui/icons-material/Close";
import {IconButton} from "@mui/material";
import {paletteColor} from "../../../_themes/paletteColor";
import {useNavigate} from "react-router-dom";

const AsideCart: FC<{}> = ({}) => {
    const mangaContentContext = useContext(CartContext);
    const navigate = useNavigate()

    const total = () => {
        if(mangaContentContext?.mangaContent === undefined){
            return 0;
        }
        else {
            let sum = 0;
            mangaContentContext.mangaContent.map((manga) => {
                sum = sum + manga.price;
            })
            return Math.round(sum * 100) / 100;
        }
    };

    const handleButtonClearCart = () => {
        mangaContentContext?.setMangaContent([]);
    }

    const handleCloseAside = () => {
        mangaContentContext?.setIsVisible(!mangaContentContext?.isVisible)
    }

    const handleGoToCart = () => {
        navigate("/CartResume")
    }

    return (
        <aside className={styles.asideCart}>
            <IconButton aria-label="close the login and register" onClick={handleCloseAside}>
                <CloseIcon sx={{color: paletteColor.darkGreen}}/>
            </IconButton>
            <HeaderAsideCart total={total()} badgeValue={mangaContentContext?.mangaContent !== undefined ? mangaContentContext.mangaContent.length : 0}/>
            <BodyAsideCart/>
            <button style={{marginBottom: "16px"}} onClick={handleButtonClearCart}>Vider le panier</button>
            <button style={{marginBottom: "16px"}} onClick={handleGoToCart}>Valider et payer</button>
        </aside>
    );
};

export default AsideCart;
