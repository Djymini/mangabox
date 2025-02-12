import {FC} from 'react';
import Filter from "./filter/Filter";
import ProductsList from "./productsList/ProductsList";
import styles from "./productScreen.module.css"

const ProductScreen: FC<{}> = ({}) => {
    return (
        <section className={styles.productScreen}>
            <Filter/>
            <ProductsList/>
        </section>
    );
};

export default ProductScreen;
