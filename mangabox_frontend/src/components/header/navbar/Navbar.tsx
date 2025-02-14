import {FC} from 'react';
import SearchBar from "./searchbar/SearchBar";
import styles from "../navbar/navbar.module.css";

const Navbar: FC<{}> = ({}) => {
    return (
        <div className={styles.navbar}>
            <h1>Manga<br/>Box</h1>
            <SearchBar/>
        </div>
    );
};

export default Navbar;
