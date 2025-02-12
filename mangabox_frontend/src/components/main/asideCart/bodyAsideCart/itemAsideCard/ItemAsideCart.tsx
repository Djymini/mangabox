import {FC, useContext} from 'react';
import styles from "../../asideCart.module.css"
import {MangaType} from "../../../../../MangaType";
import {CartContext} from "../../../../../context/CartContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemAsideCart: FC<{ manga: MangaType}> = ({manga}) => {
    const mangaContentContext = useContext(CartContext);

    return (
        <div className={styles.itemAsideCart}>
            <a className={styles.itemAsideCartImage}><img src={manga.coverImage} width="100%"/></a>
            <p className={styles.itemAsideCartTitle}>{manga.title}</p>
            <p className={styles.itemAsideCartPrice}>{manga.price + "€"}</p>
            <div className={styles.itemAsideCartButtonContainer}>
                <button><RemoveIcon/></button>
                <label>{mangaContentContext?.mangaContent.filter((item) => item.title === manga.title).length}</label>
                <button><AddIcon/></button>
            </div>
        </div>
    );
};

export default ItemAsideCart;
