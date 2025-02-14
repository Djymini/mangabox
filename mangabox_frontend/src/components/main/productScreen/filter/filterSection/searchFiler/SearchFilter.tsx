import {FC, useContext, useEffect} from 'react';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../../../productScreen.module.css"
import {SearchContext} from "../../../../../../context/SearchContext";
import {ProductSearchContext} from "../../../../../../context/ProductSearchContexte";

const SearchFilter: FC<{inputSearch: string}> = ({inputSearch}) => {
    const searchContext = useContext(SearchContext);
    const productSearchContext = useContext(ProductSearchContext)

    useEffect(() => {
        console.log(searchContext?.search)
        if (productSearchContext && searchContext) {
            productSearchContext.setSearch(searchContext.search);
        }
    }, [searchContext?.search]);

    const handleButtonClick = () => {
        searchContext?.setSearch("");  // Vider le searchContext
        productSearchContext?.setSearch("");
    }

    return (
        <div className={styles.searchFilter}>
            <p>{inputSearch}</p>
            <IconButton aria-label="delete" sx={{fontSize: '20px', width: '25px', height: '25px'}} onClick={handleButtonClick}>
                <DeleteIcon fontSize="inherit"/>
            </IconButton>
        </div>
    );
};

export default SearchFilter;
