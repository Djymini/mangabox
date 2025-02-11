import {FC, useState} from 'react';
import Page from "../../components/layout/Pages";
import ProductScreen from "../../components/main/productScreen/ProductScreen";
import {SearchContext} from "../../context/SearchContext";

const Products: FC<{}> = ({}) => {
    return (
            <Page title={"Nos produits"}>
                <ProductScreen/>
            </Page>
    );
};

export default Products;
