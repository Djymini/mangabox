import {FC, useEffect, useState} from 'react';
import CardProduct from "./cardProducts/CardProduct";
import data from "../../../../../dataFake/manga_stock.json"
import {MangaType} from "../../../../../MangaType";
import styles from "../../productScreen.module.css"

const CardProductsList: FC<{}> = ({}) => {
    const [arrayTest, setArrayTest] = useState<MangaType[]>(data)

    return (
        <div className={styles.listCardProduct}>
            {arrayTest.map((manga, index) => (
                <CardProduct manga={manga}/>
            ))}
        </div>
    );
};

export default CardProductsList;
