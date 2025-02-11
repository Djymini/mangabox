import {FC, useContext, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from "../navbar.module.css"
import {SearchContext} from "../../../../context/SearchContext";

const SearchBar: FC<{}> = ({}) => {
    const searchContext = useContext(SearchContext);
    const [searchInput, setSearchInput] = useState<string>("");

    const handleSearchInputChange = (e:any) => {
        setSearchInput(e.target.value);
    }

    const handleSearchButtonClick = () => {
        searchContext?.setSearch(searchInput);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearchButtonClick();
        }
    };


    return (
        <div className={styles.searchContainer}>
            <div>
                <input type="text" placeholder="Tapez le nom d'un manga ou d'un auteur" name="search" value={searchInput} onChange={handleSearchInputChange} onKeyDown={handleKeyPress}/>
                <button onClick={handleSearchButtonClick}><SearchIcon sx={{fontSize: '31px'}}/></button>
            </div>
        </div>
    );
};

export default SearchBar;
