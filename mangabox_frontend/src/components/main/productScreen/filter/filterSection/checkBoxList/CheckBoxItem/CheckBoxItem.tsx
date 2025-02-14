import {FC, useState} from 'react';
import styles from "../../../../productScreen.module.css"

const CheckBoxItem: FC<{nameGenre: string, arrayGenre: string[], updateArrayGenre: (genre: string, isChecked: boolean) => void  }> = ({nameGenre, arrayGenre, updateArrayGenre}) => {
    const [isChecked, setIsChecked] = useState<boolean>(arrayGenre.includes(nameGenre));

    const handleChange = () => {
        setIsChecked(!isChecked)
        updateArrayGenre(nameGenre, isChecked)
    }

    return (
        <label className={styles.checkbox}>
            <input type="checkbox" checked={isChecked} onChange={handleChange}/>
            <span className={styles.checkmark}></span>
            {nameGenre}
        </label>
    );
};

export default CheckBoxItem;
