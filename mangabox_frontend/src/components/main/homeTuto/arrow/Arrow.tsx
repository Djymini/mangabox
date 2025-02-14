import {FC} from 'react';
import styles from "../homeTuto.module.css";

const Arrow: FC<{}> = ({}) => {
    return (
        <div className={styles.arrow}>
            <div className={styles.arrowLine}></div>
            <div className={styles.arrowHead}></div>
        </div>
    );
};

export default Arrow;
