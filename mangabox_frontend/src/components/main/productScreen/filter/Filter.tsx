import {FC, useContext, useEffect, useState} from 'react';
import {SearchContext} from "../../../../context/SearchContext";
import CheckBoxItem from "./filterSection/checkBoxList/CheckBoxItem/CheckBoxItem";
import {mangaGenres} from "../../../../_data/mangaGenre";
import FilterSection from "./filterSection/FilterSection";
import SearchFilter from "./filterSection/searchFiler/SearchFilter";
import CheckBoxList from "./filterSection/checkBoxList/CheckBoxList";

const Filter: FC<{}> = ({}) => {
    const searchContext = useContext(SearchContext);
    const [arrayGenre, setArrayGenre] = useState<number[]>([]);

    const updateArrayGenre = (genreNumber: number, isChecked: boolean) => {
        setArrayGenre(prevArray => {
            const newArray = [...prevArray];
            if (!isChecked) {
                newArray.push(genreNumber);
            } else {
                const index = newArray.indexOf(genreNumber);
                if (index !== -1) {
                    newArray.splice(index, 1);
                }
            }
            return newArray;
        });
    };

    return (
        <div>
            <FilterSection titleSection={"Recherche"}>
                <SearchFilter inputSearch={searchContext?.search !== undefined ? searchContext?.search : ""}/>
            </FilterSection>
            <div>Array Genre: {JSON.stringify(arrayGenre)}</div>
            <FilterSection titleSection={"Genre"}>
                <CheckBoxList>
                    {mangaGenres.map((genre, index) => (
                        <li><CheckBoxItem key={index} nameGenre={genre} arrayGenre={arrayGenre} genreNumber={index} updateArrayGenre={updateArrayGenre}/></li>
                    ))}
                </CheckBoxList>
            </FilterSection>
        </div>
    );
};

export default Filter;
