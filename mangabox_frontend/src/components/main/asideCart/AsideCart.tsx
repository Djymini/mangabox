import {FC, useContext} from 'react';
import styles from "./asideCart.module.css"
import HeaderAsideCart from "./headerAsideCart/HeaderAsideCart";
import {CartContext} from "../../../context/CartContext";
import BodyAsideCart from "./bodyAsideCart/BodyAsideCart";

const AsideCart: FC<{}> = ({}) => {
    const mangaContentContext = useContext(CartContext);

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

    return (
        <aside className={styles.asideCart}>
            <HeaderAsideCart total={total()} badgeValue={mangaContentContext?.mangaContent !== undefined ? mangaContentContext.mangaContent.length : 0}/>
            <BodyAsideCart/>
            <button style={{marginBottom: "16px"}} onClick={handleButtonClearCart}>Vider le panier</button>
            <button style={{marginBottom: "16px"}}>Valider et payer</button>
        </aside>
    );
};

export default AsideCart;
