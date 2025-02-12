import {FC, useContext} from 'react';
import styles from "./asideCart.module.css"
import BadgeCart from "./badgeCart/BadgeCart";
import HeaderAsideCart from "./headerAsideCart/HeaderAsideCart";
import {CartContext} from "../../../context/CartContext";

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

    return (
        <aside className={styles.asideCart}>
            <HeaderAsideCart total={total()} badgeValue={mangaContentContext?.mangaContent !== undefined ? mangaContentContext.mangaContent.length : 0}/>
        </aside>
    );
};

export default AsideCart;
