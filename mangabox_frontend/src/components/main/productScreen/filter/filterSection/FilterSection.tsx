import {FC} from 'react';
import styles from "../../productScreen.module.css"

const FilterSection: FC<{children:any, titleSection:string, display: string}> = ({children, titleSection, display}) => {
    return (
        <div className={styles.filterSection} style={{display: display}}>
            <h4>{titleSection}</h4>
            {children}
        </div>
    );
};

export default FilterSection;
