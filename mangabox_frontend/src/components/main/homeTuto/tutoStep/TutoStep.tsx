import {FC} from 'react';
import styles from "../homeTuto.module.css";
import {SvgIconProps} from '@mui/material/SvgIcon';
import {homeTutoStyle} from "../homeTutoStyle";

const TutoStep: FC<{title:string, Icon: React.ElementType<SvgIconProps>, text: string}> = ({title, Icon, text}) => {
    return (
        <div className={styles.step}>
            <h3>{title}</h3>
            <Icon sx={homeTutoStyle}/>
            <p>{text}</p>
        </div>
    );
};

export default TutoStep;
