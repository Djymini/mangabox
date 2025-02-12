import {FC, useState} from 'react';
import styles from "../../../productScreen.module.css"
import CheckBoxItem from "./CheckBoxItem/CheckBoxItem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CheckBoxList: FC<{name:string, array:string[]}> = ({name, array}) => {
    const [listIsVisible, setListIsVisible] = useState<boolean>(false);
    const [arrayGenre, setArrayGenre] = useState<string[]>([]);
    const [listGenre, setListGenre] = useState<string[]>(array)

    const updateArrayGenre = (genre: string, isChecked: boolean) => {
        setArrayGenre(prevArray => {
            const newArray = [...prevArray];
            if (!isChecked) {
                newArray.push(genre);
            } else {
                const index = newArray.indexOf(genre);
                if (index !== -1) {
                    newArray.splice(index, 1);
                }
            }
            return newArray;
        });
    };

    const toggleList = () => {
        setListIsVisible(!listIsVisible);
    }

    const filterFunction = (e: any) => {
        const filter = e.target.value.toUpperCase();
        if (filter === "") {
            setListGenre(array);
        } else {
            setListGenre(array.filter((element) => element.toLowerCase().indexOf(filter.toLowerCase()) > -1));
        }
    }

    return (
        <div className={styles.dropdown}>
            <button onClick={toggleList} className="dropbtn">
                {name}
                {listIsVisible ? (
                        <KeyboardArrowUpIcon/>
                ) :
                    (
                        <KeyboardArrowDownIcon/>
                    )}
            </button>
            <div className={listIsVisible ? styles.dropdownContentIsVisible : styles.dropdownContent}>
                <input type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction}/>
                {listGenre.map((genre, index) => (
                    <CheckBoxItem key={index} nameGenre={genre} arrayGenre={arrayGenre} updateArrayGenre={updateArrayGenre}/>
                ))}
            </div>
        </div>
    );
};

export default CheckBoxList;
