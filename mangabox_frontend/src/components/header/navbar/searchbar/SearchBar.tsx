import {FC} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from "../navbar.module.css"

const SearchBar: FC<{}> = ({}) => {
    return (
        <div className={styles.searchContainer}>
            <form action="/action_page.php">
                <input type="text" placeholder="Tapez le nom d'un manga ou d'un auteur" name="search"/>
                <button type="submit"><SearchIcon sx={{fontSize: '31px'}}/></button>
            </form>
        </div>
    );
};

export default SearchBar;
