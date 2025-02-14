import {FC, useContext} from 'react';
import {SearchContext} from "../../../../context/SearchContext";
import {mangaGenres} from "../../../../_data/mangaGenre";
import FilterSection from "./filterSection/FilterSection";
import SearchFilter from "./filterSection/searchFiler/SearchFilter";
import CheckBoxList from "./filterSection/checkBoxList/CheckBoxList";
import {mangaPublisher} from "../../../../_data/mangaPublisher";
import PriceFilter from "./filterSection/priceFilter/PriceFilter";
import styles from "../productScreen.module.css"
import {ProductSearchContext} from "../../../../context/ProductSearchContexte";

const Filter: FC<{}> = ({}) => {
    const searchContext = useContext(SearchContext);
    const productSearhContext = useContext(ProductSearchContext);

    const handleButtonClearFilter = () => {
        searchContext?.setSearch("");
        productSearhContext?.setMinPrice(0);
        productSearhContext?.setMaxPrice(500);
        productSearhContext?.setSearch("");
        productSearhContext?.setPublisher([]);
        productSearhContext?.setGenres([]);
    }

    return (
        <section className={styles.filter}>
            <h3>Filtres</h3>
            {searchContext?.search !== undefined && searchContext?.search !== "" ? (
                    <FilterSection titleSection={"Recherche"} display={"block"}>
                        <SearchFilter inputSearch={searchContext?.search}/>
                    </FilterSection>
            )
                : (
                    <FilterSection titleSection={"Recherche"} display={"none"}>
                    </FilterSection>
            )}
            <FilterSection titleSection={"Genre"} display={"block"}>
                <CheckBoxList name={"Liste des genres"} array={mangaGenres}/>
            </FilterSection>

            <FilterSection titleSection={"Editeur"} display={"block"}>
                <CheckBoxList name={"Liste des éditeurs"} array={mangaPublisher}/>
            </FilterSection>

            <FilterSection titleSection={"Prix"} display={"block"}>
                <PriceFilter/>
            </FilterSection>

            <button onClick={handleButtonClearFilter}>Réinitialiser le filtre</button>
        </section>
    );
};

export default Filter;
