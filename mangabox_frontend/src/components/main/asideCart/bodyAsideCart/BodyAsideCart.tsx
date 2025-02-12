import {FC, useContext} from 'react';
import {CartContext} from "../../../../context/CartContext";
import ItemAsideCart from "./itemAsideCard/ItemAsideCart";
import styles from "../asideCart.module.css"

const BodyAsideCart: FC<{}> = ({}) => {
    const mangaContentContext = useContext(CartContext);
    return (
        <div className={styles.bodyAsideCart}>
            {mangaContentContext?.mangaContent.filter((item, index) => mangaContentContext.mangaContent.indexOf(item) === index).map((manga) => (
                <ItemAsideCart manga={manga}/>
            ))}
        </div>
    );
};

export default BodyAsideCart;
