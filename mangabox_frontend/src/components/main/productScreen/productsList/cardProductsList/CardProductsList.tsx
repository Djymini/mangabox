import {FC, useEffect, useState} from 'react';
import CardProducts from "./cardProducts/CardProducts";
import data from "../../../../../dataFake/manga_stock.json"
import {MangaType} from "../../../../../MangaType";

const CardProductsList: FC<{}> = ({}) => {
    const [arrayTest, setArrayTest] = useState<MangaType[]>(data)

    return (
        <div>
            {arrayTest.map((manga, index) => (
                <CardProducts manga={manga}/>
            ))}
        </div>
    );
};

export default CardProductsList;
