import {FC, useContext} from 'react';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {SearchContext} from "../../../../../../context/SearchContext";

const SearchFilter: FC<{inputSearch: string}> = ({inputSearch}) => {
    return (
        <>
            <p>{inputSearch}</p>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit"/>
            </IconButton>
        </>
    );
};

export default SearchFilter;
