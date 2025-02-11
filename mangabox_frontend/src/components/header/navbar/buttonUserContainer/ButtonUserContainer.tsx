import {FC} from 'react';
import {IconButton} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import {paletteColor} from "../../../../_themes/paletteColor";
import styles from "../navbar.module.css"
import {navbarButtonStyle, navbarIconStyle} from "../navbarStyles";

const ButtonUserContainer: FC<{}> = ({}) => {
    return (
        <div className={styles.buttonUserContainer}>
            <IconButton sx={navbarButtonStyle}>
                <LoginIcon sx={navbarIconStyle}/>
            </IconButton>
        </div>
    );
};

export default ButtonUserContainer;
