import {FC, useContext} from 'react';
import Filter from "./filter/Filter";
import ProductsList from "./productsList/ProductsList";
import styles from "./productScreen.module.css"
import AsideCart from "../asideCart/AsideCart";
import {CartContext} from "../../../context/CartContext";

const ProductScreen: FC<{}> = ({}) => {
    const mangaContentContext = useContext(CartContext)
    return (
        <section className={styles.productScreen}>
            <Filter/>
            <ProductsList/>
            {mangaContentContext?.mangaContent !== undefined && mangaContentContext.isVisible ? (
                    <div style={{width: "200px"}}></div>
                )
                :
                (
                    <></>
                )}
        </section>
    );
};

export default ProductScreen;
