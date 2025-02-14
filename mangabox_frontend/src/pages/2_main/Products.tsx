import {FC, useContext, useState} from 'react';
import Page from "../../components/layout/Pages";
import ProductScreen from "../../components/main/productScreen/ProductScreen";
import AsideCart from "../../components/main/asideCart/AsideCart";
import {CartContext} from "../../context/CartContext";
import {ProductSearchContext} from "../../context/ProductSearchContexte";

const Products: FC<{}> = ({}) => {
    const mangaContentContext = useContext(CartContext);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(500);
    const [search, setSearch] = useState<string>("");
    const [publisher, setPublisher] = useState<string[]>([]);
    const [genres, setGenres] = useState<string[]>([]);

    return (
            <Page title={"Nos produits"}>
                <ProductSearchContext.Provider value={{minPrice, setMinPrice, maxPrice, setMaxPrice, search, setSearch, publisher, setPublisher, genres, setGenres}}>
                    <ProductScreen/>
                    {mangaContentContext?.isVisible ? (
                            <AsideCart/>
                        )
                        :
                        (
                            <></>
                        )}
                </ProductSearchContext.Provider>
            </Page>
    );
};

export default Products;
