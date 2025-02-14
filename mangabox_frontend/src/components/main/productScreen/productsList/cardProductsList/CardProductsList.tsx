import {FC, useContext, useEffect, useState} from 'react';
import CardProduct from "./cardProducts/CardProduct";
import {MangaType} from "../../../../../MangaType";
import styles from "../../productScreen.module.css"
import {get} from "../../../../../api/api";
import {ProductSearchContext} from "../../../../../context/ProductSearchContexte";

const CardProductsList: FC<{}> = ({}) => {
    const [mangaList, setMangaList] = useState<MangaType[]>([])
    const productSearchContext = useContext(ProductSearchContext)

    const hydrateCollection = async () => {
        const params = new URLSearchParams();
        if(productSearchContext){
            params.append("minPrice", productSearchContext.minPrice.toString());
            params.append("maxPrice", productSearchContext.maxPrice.toString());
            params.append("search", productSearchContext.search);
        }

        if (productSearchContext?.publisher?.length) {
            productSearchContext.publisher.forEach(publisher => {
                params.append("publisher", publisher);
            });
        }

        if (productSearchContext?.genres?.length) {
            productSearchContext.genres.forEach(genre => {
                params.append("genres", genre);
            });
        }

        const url = `/product/search?${params.toString()}`;
        console.log(url);
        try {

            const results = await get(url);
            console.log("Résultats API:", results);
            if (results) {
                setMangaList(results);
            } else {
                console.error("Aucune donnée dans 'results'");
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des mangas:", error);
        }
    };

    useEffect(() => {
        hydrateCollection();
    }, [productSearchContext]);

    return (
        <div className={styles.listCardProduct}>
            {mangaList.map((manga, index) => (
                <CardProduct manga={manga}/>
            ))}
        </div>
    );
};

export default CardProductsList;
