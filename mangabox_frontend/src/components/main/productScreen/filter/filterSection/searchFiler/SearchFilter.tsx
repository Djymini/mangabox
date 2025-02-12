import {FC, useContext} from 'react';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../../../productScreen.module.css"
import {SearchContext} from "../../../../../../context/SearchContext";

const SearchFilter: FC<{inputSearch: string}> = ({inputSearch}) => {
    const searchContext = useContext(SearchContext);

    const handleButtonClick = () => {
        searchContext?.setSearch("");
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
