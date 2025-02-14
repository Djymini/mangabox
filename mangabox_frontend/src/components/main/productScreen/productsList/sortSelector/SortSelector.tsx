import {FC} from 'react';
import styles from "../../productScreen.module.css"

const SortSelector: FC<{}> = ({}) => {
    return (
        <div className={styles.sortSelector}>
            <select name="pets" id="pet-select">
                <option value="">--Tri par défaut--</option>
                <option value="upPrice">Tri par prix croissant</option>
                <option value="downPrice">Tri par prix décroissant</option>
                <option value="upAbc">Tri alphabétique croissant</option>
                <option value="downAbc">Tri alphabétique décroissant</option>
                <option value="date">Tri par date de sortie</option>
            </select>
        </div>
    );
};

export default SortSelector;
