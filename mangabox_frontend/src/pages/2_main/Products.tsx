import {FC, useContext, useState} from 'react';
import Page from "../../components/layout/Pages";
import ProductScreen from "../../components/main/productScreen/ProductScreen";
import AsideCart from "../../components/main/asideCart/AsideCart";
import {CartContext} from "../../context/CartContext";

const Products: FC<{}> = ({}) => {
    const mangaContentContext = useContext(CartContext);

    return (
            <Page title={"Nos produits"}>
                <ProductScreen/>
                {mangaContentContext?.isVisible ? (
                        <AsideCart/>
                )
                :
                    (
                        <></>
                    )}
            </Page>
    );
};

export default Products;
